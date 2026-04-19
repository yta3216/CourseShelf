import prisma from "../db.server.js";
import { Form, redirect, useActionData } from "react-router";

const courseRegex = /^\d{4}(W|S)(1|2)$/;

export async function action({ request }) {

    let formData = await request.formData();

    const courseName = formData.get("courseName");
    const department = formData.get("department");
    const term = formData.get("term").toUpperCase();

    const validateError = validateFormData({ courseName, department, term });
    if (validateError) {
        return validateError;
    }

    let newCourse;
    try {
        newCourse = await prisma.course.create({
            data: {
                name: courseName,
                department: department,
                term: term,
            }
        });
    } catch (error) {
        return { message: "An error occurred while creating the course" };
    }

    return redirect(`/courses/${newCourse.id}`);
}

export function validateFormData({ courseName, department, term }) {
    if (!courseName || !department || !term) {
        return { message: "Please fill out all fields" };
    }
    if (!courseRegex.test(term)) {
        return { message: "Term must be 4 numbers followed by W or S then 1 or 2" };
    }
    return null;
}

export default function NewCourse() {
    const data = useActionData();
    return (
        <div className="w-1/2 m-auto flex flex-col gap-4">
            <h1 className="text-4xl"> Create New Course </h1>
            <Form action="/courses/new" method="post" className="flex flex-col gap-4">
                <label htmlFor="courseName"> Course Name </label>
                <input name="courseName" placeholder="Enter course name" id="courseName" type="text" className="border border-gray-300 bg-gray-100 text-gray-700 rounded-md py-2 px-4" required />
                <label htmlFor="department"> Department </label>
                <select name="department" id="department" className="border border-gray-300 bg-gray-100 text-gray-700 rounded-md py-2 px-4">
                    <option value="COMPUTER_SCIENCE"> Computer Science </option>
                    <option value="MATHEMATICS"> Mathematics </option>
                    <option value="DATA_SCIENCE"> Data Science </option>
                    <option value="GENERAL_SCIENCE"> General Science </option>
                </select>
                <label htmlFor="term"> Term </label>
                <input name="term" placeholder="Enter term (e.g., 2026W1)" id="term" type="text" pattern={courseRegex.source} title="Term must be 4 numbers followed by W or S then 1 or 2" className="border border-gray-300 bg-gray-100 text-gray-700 rounded-md py-2 px-4" required />
                <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-950 transition-colors"> Submit </button>
                {data?.message && <p className="text-red-500"> {data.message} </p>}
            </Form>
        </div>
    );
}