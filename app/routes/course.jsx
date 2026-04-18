import prisma from "../db.server.js";
import { useLoaderData } from "react-router";
import { DEPARTMENT_LABELS, MATERIAL_LABELS } from "../utils/labels.js";

export async function loader({ params }) {
    const course = await prisma.course.findUnique({ where: { id: Number(params.id) }, include: { materials: true, }, });
    if (!course) {
        throw new Response("Course Not Found", { status: 404 });
    }
    return { course };
}

export default function Course() {
    const { course } = useLoaderData();
    return (
        <div className="w-3/4 m-auto ">
            <div className="grid grid-cols-[2fr_1fr] p-4 items-center">
                <h1 className="text-4xl font-bold text-gray-50"> {course.name} </h1>
                <div className="flex flex-col justify-evenly">
                    <h3 className="text-2xl text-gray-200 text-right"> {DEPARTMENT_LABELS[course.department] || course.department} </h3>
                    <h3 className="text-gray-400 text-right"> {course.term} </h3>
                </div>
            </div>
            <div className="flex flex-col gap-8 p-4">
                {course.materials.map((material) => (
                    <div className="flex flex-col">
                        <div className="flex items-end justify-between">
                            <h4>{material.title}</h4>
                            <h4 className="text-gray-400">{MATERIAL_LABELS[material.type] || material.type}</h4>
                        </div>
                        <div className="flex items-end justify-between">
                            <h4 className="text-gray-400"> Description: {material.description}</h4>
                            <a href={material.link} className="underline text-blue-500">Attachment</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}