import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "@/layout/app-layout";
import Home from "@/pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace={true} />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <Home />,
      },
      {
        path: "services",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
