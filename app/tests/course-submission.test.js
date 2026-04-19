import prisma from "../db.server.js";
import { test, expect, vi, beforeEach } from "vitest";
import { action } from "../routes/new-course.jsx";

vi.mock("../db.server.js", () => ({
    default: {
        course: {
            create: vi.fn()
        }
    }
}))

beforeEach(() => {
    vi.clearAllMocks()
})

test('creates a new course with valid data', async () => {
    prisma.course.create.mockResolvedValue({
        id: 1,
        name: "Computer Programming I",
        department: "COMPUTER_SCIENCE",
        term: "2026W1"
    });

    const formData = new FormData()
    formData.append("courseName", "Computer Programming I")
    formData.append("department", "COMPUTER_SCIENCE")
    formData.append("term", "2026W1")

    const request = new Request("http://localhost/courses/new", {
        method: "POST",
        body: formData
    });

    const response = await action({ request })
    expect(prisma.course.create).toHaveBeenCalledWith({
        data: {
            name: "Computer Programming I",
            department: "COMPUTER_SCIENCE",
            term: "2026W1"
        }
    });
    expect(response.status).toBe(302);
    expect(response.headers.get('Location')).toBe('/courses/1');
})

test('creates a new course with invalid data', async () => {
    const formData = new FormData()
    formData.append("courseName", "Computer Programming II")
    formData.append("department", "COMPUTER_SCIENCE")
    formData.append("term", "2026D3")

    const request = new Request("http://localhost/courses/new", {
        method: "POST",
        body: formData
    });

    const response = await action({ request })
    expect(prisma.course.create).not.toHaveBeenCalled();
    expect(response).toEqual({ message: "Term must be 4 numbers followed by W or S then 1 or 2" });
})