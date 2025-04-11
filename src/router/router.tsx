import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Searvice from "@/pages/Searvice";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",

    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "service",
        element: <Searvice />,
      },
      {
        path: "case-studies",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  { path: "*", element : <NotFound /> },
]);

export default router;
