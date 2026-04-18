import prisma from "../db.server.js";
import { useLoaderData, Link } from "react-router";
import { DEPARTMENT_LABELS } from "../utils/labels.js"

export function meta() {
  return [
    { title: "CourseShelf" },
    { name: "description", content: "View all listed courses" },
  ];
}

export async function loader() {
  const courses = await prisma.course.findMany();
  return { courses };
}

export default function Home() {
  const { courses } = useLoaderData();

  return (
    <div className="grid grid-cols-2 w-1/2 gap-4 m-auto">
      {courses.map((course) => (
        <Link key={course.id} to={`/courses/${course.id}`}
          className="flex justify-center flex-col bg-blue-200 text-blue-950 p-8">
          <h3>{course.name}</h3>
          <h3>{DEPARTMENT_LABELS[course.department] || course.department}</h3>
          <h3>{course.term}</h3>
        </Link>
      ))}
    </div>
  );
}
