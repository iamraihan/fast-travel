import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: "/", element: <Home /> }],
  },
]);

export default routes;
