import { index, prefix, route, layout } from "@react-router/dev/routes";

export default [
    layout("routes/layout.jsx", [
        index("routes/home.jsx"),
        ...prefix("courses", [
            route("new", "routes/new-course.jsx"),
            route(":id", "routes/course.jsx"),
            route(":id/materials/new", "routes/new-material.jsx")
        ])
    ])
];
