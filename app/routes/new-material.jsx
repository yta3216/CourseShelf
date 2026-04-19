import prisma from "../db.server.js";
import { Form, redirect, useActionData, useLoaderData } from "react-router";

export async function loader({ params }) {
    const course = await prisma.course.findUnique({ where: { id: Number(params.id) }, include: { materials: true, }, });
    if (!course) {
        throw new Response("Course Not Found", { status: 404 });
    }
    return { course };
}

export async function action({ request, params }) {
    const formData = await request.formData();

    const title = formData.get("title");
    const type = formData.get("type");
    const link = formData.get("link");
    const description = formData.get("description");

    if (!title || !type || !description) {
        return { message: "Please fill out all required fields" };
    }

    try {
        await prisma.material.create({
            data: {
                title: title,
                type: type,
                link: link,
                description: description,
                courseId: Number(params.id),
            }
        })
    } catch (error) {
        return { message: "An error occurred while creating the material" };
    }
    return redirect(`/courses/${params.id}`)
}

export default function NewMaterial() {
    const { course } = useLoaderData();
    const data = useActionData();
    return (
        <div className="w-1/2 m-auto flex flex-col gap-4">
            <h1 className="text-4xl"> Create New Material </h1>
            <h4 className="text-gray-500"> Course: {course.name} </h4>
            <Form action={`/courses/${course.id}/materials/new`} method="post" className="flex flex-col gap-4">
                <label htmlFor="title"> Material Title </label>
                <input name="title" placeholder="Enter material title" id="title" type="text" className="border border-gray-300 bg-gray-100 text-gray-700 rounded-md py-2 px-4" required />
                <label htmlFor="type"> Type </label>
                <select name="type" id="type" className="border border-gray-300 bg-gray-100 text-gray-700 rounded-md py-2 px-4">
                    <option value="LECTURE_NOTES"> Lecture Notes </option>
                    <option value="ASSIGNMENT"> Assignment </option>
                    <option value="SYLLABUS"> Syllabus </option>
                    <option value="OTHER"> Other </option>
                </select>
                <label htmlFor="link"> Link (optional) </label>
                <input name="link" placeholder="Enter link (optional)" id="link" type="url" className="border border-gray-300 bg-gray-100 text-gray-700 rounded-md py-2 px-4" />
                <label htmlFor="description"> Description </label>
                <textarea name="description" placeholder="Enter description" id="description" className="border border-gray-300 bg-gray-100 text-gray-700 rounded-md py-2 px-4" />
                <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-950 transition-colors"> Submit </button>
                {data?.message && <p className="text-red-500"> {data.message} </p>}
            </Form>
        </div>
    );
}