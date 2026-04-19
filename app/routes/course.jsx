import prisma from "../db.server.js";
import { useLoaderData, useActionData, Form, Link, redirect } from "react-router";
import { DEPARTMENT_LABELS, MATERIAL_LABELS } from "../utils/labels.js";

export async function loader({ params }) {
    const course = await prisma.course.findUnique({ where: { id: Number(params.id) }, include: { materials: true, }, });
    if (!course) {
        throw new Response("Course Not Found", { status: 404 });
    }
    return { course };
}

export async function action({ request, params }) {
    const formData = await request.formData();

    const intent = formData.get("intent");
    const materialId = formData.get("materialId");
    if (!intent || !materialId) {
        return { message: "Missing form data" };
    }
    if (intent === "deleteMaterial") {
        try {
            await prisma.material.delete({ where: { id: Number(materialId) } });
        } catch (error) {
            return { message: "Internal server error" };
        }
        return redirect(`/courses/${params.id}`);
    }
}

export default function Course() {
    const { course } = useLoaderData();
    const data = useActionData();
    return (
        <div className="w-3/4 m-auto ">
            <div className="grid grid-cols-[2fr_1fr] p-4 items-center">
                <h1 className="text-4xl font-bold text-gray-50"> {course.name} </h1>
                <div className="flex flex-col justify-evenly">
                    <h3 className="text-2xl text-gray-200 text-right"> {DEPARTMENT_LABELS[course.department] || course.department} </h3>
                    <h3 className="text-gray-400 text-right"> {course.term} </h3>
                </div>
            </div>
            {data?.message && <p className="text-red-500"> {data.message} </p>}
            <ul className="flex flex-col gap-8 p-4">
                {course.materials.map((material) => (
                    <li className="flex flex-col" key={material.id}>
                        <div className="flex items-end justify-between">
                            <h4>{material.title}</h4>
                            <p className="text-gray-400">{MATERIAL_LABELS[material.type] || material.type}</p>
                        </div>
                        <div className="flex items-end justify-between">
                            <p className="text-gray-400"> Description: {material.description}</p>
                            {material.link && <a href={material.link} className="underline text-blue-500">Attachment</a>}
                        </div>
                        <div className="flex">
                            <Form method="post" className="my-2" onSubmit={(e) => {
                                if (!window.confirm("Are you sure you want to delete this material?")) e.preventDefault();
                            }}>
                                <input type="hidden" name="intent" value="deleteMaterial" />
                                <input type="hidden" name="materialId" value={material.id} />
                                <button type="submit" className="bg-red-900 text-white px-2 py-1 rounded hover:bg-red-950 transition-colors">Delete</button>
                            </Form>
                            
                        </div>
                    </li>
                ))}
            </ul>
            <Link to={`/courses/${course.id}/materials/new`} className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-950 transition-colors"> Add Material </Link>
        </div>
    );
}