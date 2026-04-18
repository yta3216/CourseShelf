import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
    await prisma.course.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: "Computer Programming I",
            department: "COMPUTER_SCIENCE",
            term: "2026W1",
            materials: {
                create: [
                    {
                        title: "Lecture 1",
                        type: "LECTURE_NOTES",
                        description: "Slides containing content for Lecture 1.",
                        link: "https://example.com"
                    },
                    {
                        title: "Lecture 2",
                        type: "LECTURE_NOTES",
                        description: "Slides containing content for Lecture 2.",
                        link: "https://example.com"
                    },
                    {
                        title: "Assignment 1",
                        type: "ASSIGNMENT",
                        description: "The first assignment.",
                        link: "https://example.com"
                    },
                    {
                        title: "Course Syllabus",
                        type: "SYLLABUS",
                        description: "Course Syllabus",
                        link: "https://example.com"
                    },
                    {
                        title: "Informational Video",
                        type: "OTHER",
                        description: "A good video covering some concepts.",
                        link: "https://example.com"
                    },
                ],
            },
        },
    });
    await prisma.course.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: "Differential Calculus",
            department: "MATHEMATICS",
            term: "1999S2",
            materials: {
                create: [
                    {
                        title: "Lecture 1",
                        type: "LECTURE_NOTES",
                        description: "Slides containing content for Lecture 1.",
                        link: "https://example.com"
                    },
                    {
                        title: "Lecture 2",
                        type: "LECTURE_NOTES",
                        description: "Slides containing content for Lecture 2.",
                        link: "https://example.com"
                    },
                    {
                        title: "Assignment 1",
                        type: "ASSIGNMENT",
                        description: "The first assignment.",
                        link: "https://example.com"
                    },
                    {
                        title: "Course Syllabus",
                        type: "SYLLABUS",
                        description: "Course Syllabus",
                        link: "https://example.com"
                    },
                    {
                        title: "Informational Video",
                        type: "OTHER",
                        description: "A good video covering some concepts.",
                        link: "https://example.com"
                    },
                ],
            },
        },
    });
    await prisma.course.upsert({
        where: { id: 3 },
        update: {},
        create: {
            name: "Machine Learning",
            department: "DATA_SCIENCE",
            term: "2026W2",
            materials: {
                create: [
                    {
                        title: "Lecture 1",
                        type: "LECTURE_NOTES",
                        description: "Slides containing content for Lecture 1.",
                        link: "https://example.com"
                    },
                    {
                        title: "Lecture 2",
                        type: "LECTURE_NOTES",
                        description: "Slides containing content for Lecture 2.",
                        link: "https://example.com"
                    },
                    {
                        title: "Assignment 1",
                        type: "ASSIGNMENT",
                        description: "The first assignment.",
                        link: "https://example.com"
                    },
                    {
                        title: "Course Syllabus",
                        type: "SYLLABUS",
                        description: "Course Syllabus",
                        link: "https://example.com"
                    },
                    {
                        title: "Informational Video",
                        type: "OTHER",
                        description: "A good video covering some concepts.",
                        link: "https://example.com"
                    },
                ],
            },
        },
    });
    await prisma.course.upsert({
        where: { id: 4 },
        update: {},
        create: {
            name: "Computer Programming II",
            department: "COMPUTER_SCIENCE",
            term: "2026W2",
            materials: {
                create: [
                    {
                        title: "Lecture 1",
                        type: "LECTURE_NOTES",
                        description: "Slides containing content for Lecture 1.",
                        link: "https://example.com"
                    },
                    {
                        title: "Lecture 2",
                        type: "LECTURE_NOTES",
                        description: "Slides containing content for Lecture 2.",
                        link: "https://example.com"
                    },
                    {
                        title: "Assignment 1",
                        type: "ASSIGNMENT",
                        description: "The first assignment.",
                        link: "https://example.com"
                    },
                    {
                        title: "Course Syllabus",
                        type: "SYLLABUS",
                        description: "Course Syllabus",
                        link: "https://example.com"
                    },
                    {
                        title: "Informational Video",
                        type: "OTHER",
                        description: "A good video covering some concepts.",
                        link: "https://example.com"
                    },
                ],
            },
        },
    });
    await prisma.course.upsert({
        where: { id: 5 },
        update: {},
        create: {
            name: "Computer Vision",
            department: "COMPUTER_SCIENCE",
            term: "2026W2",
            materials: {
                create: [
                    {
                        title: "Lecture 1",
                        type: "LECTURE_NOTES",
                        description: "Slides containing content for Lecture 1.",
                        link: "https://example.com"
                    },
                    {
                        title: "Lecture 2",
                        type: "LECTURE_NOTES",
                        description: "Slides containing content for Lecture 2.",
                        link: "https://example.com"
                    },
                    {
                        title: "Assignment 1",
                        type: "ASSIGNMENT",
                        description: "The first assignment.",
                        link: "https://example.com"
                    },
                    {
                        title: "Course Syllabus",
                        type: "SYLLABUS",
                        description: "Course Syllabus",
                        link: "https://example.com"
                    },
                    {
                        title: "Informational Video",
                        type: "OTHER",
                        description: "A good video covering some concepts.",
                        link: "https://example.com"
                    },
                ],
            },
        },
    });
    await prisma.course.upsert({
        where: { id: 6 },
        update: {},
        create: {
            name: "Chemistry 101",
            department: "GENERAL_SCIENCE",
            term: "2024W1",
            materials: {
                create: [
                    {
                        title: "Lecture 1",
                        type: "LECTURE_NOTES",
                        description: "Slides containing content for Lecture 1.",
                        link: "https://example.com"
                    },
                    {
                        title: "Lecture 2",
                        type: "LECTURE_NOTES",
                        description: "Slides containing content for Lecture 2.",
                        link: "https://example.com"
                    },
                    {
                        title: "Assignment 1",
                        type: "ASSIGNMENT",
                        description: "The first assignment.",
                        link: "https://example.com"
                    },
                    {
                        title: "Course Syllabus",
                        type: "SYLLABUS",
                        description: "Course Syllabus",
                        link: "https://example.com"
                    },
                    {
                        title: "Informational Video",
                        type: "OTHER",
                        description: "A good video covering some concepts.",
                        link: "https://example.com"
                    },
                ],
            },
        },
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });