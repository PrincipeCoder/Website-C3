import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import Directors from "./components/pages/Directors";
import Roadmap from "./components/pages/Roadmap";
import Catalog from "./components/pages/Catalog";
import Achievements from "./components/pages/Achievements";
import Blog from "./components/pages/Blog";
import AppLayout from "./components/templates/AppLayout";
import NotFound from "./components/pages/NotFound";
import Events from "./components/pages/Events.jsx";
import Nosotros from "./components/pages/Nosotros";
import Contacto from "./components/pages/Contacto";
import C3Conf from "./components/pages/C3Conf";
import C3TF from "./components/pages/C3TF";


const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { index: true, element: <Home /> },
            // Modificamos el path a JuntaDirectiva
            { path: "nosotros", element: <Nosotros /> },
            { path: "JuntaDirectiva", element: <Directors /> },
            { path: "contacto", element: <Contacto /> },
            { path: "eventos", element: <Events /> },
            { path: "roadmap", element: <Roadmap /> },
            { path: "catalogo", element: <Catalog /> },
            { path: "logros", element: <Achievements /> },
            { path: "blog", element: <Blog /> },
            { path: "eventos/C3Conf", element: <C3Conf /> },
            { path: "recursos/C3TF", element: <C3TF /> }
        ],
        errorElement: <NotFound />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);