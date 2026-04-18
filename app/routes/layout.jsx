import { Outlet, Link } from "react-router";

export default function Layout() {
    return (
        <div>
            <nav className="flex justify-between m-4 gap-4">
                <Link to="/" className="text-4xl italic tracking-tighter"> CourseShelf </Link>
                <Link to="/courses/new" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-950 transition-colors"> New Course </Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}