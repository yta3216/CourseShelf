import prisma from "../db.server.js";
import { useLoaderData, Link } from "react-router";

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

  const DEPARTMENT_LABELS = {
    "COMPUTER_SCIENCE": "Computer Science",
    "MATEMATICS": "Mathematics",
    "DATA_SCIENCE": "Data Science",
    "GENERAL_SCIENCE": "General Science",
  }

  return (
    <div className="grid grid-cols-2 w-1/2 gap-4 m-auto">
      {courses.map((course) => (
        <Link key={course.id} to={`/courses/${course.id}`}
        className="bg-blue-200 text-blue-950 p-20">
          {course.name}<br />
          DEPARTMENT_LABELS[course.department]<br />
          {course.term}
        </Link>
      ))}
    </div>
  );
}
