import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

export const router = new createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/owner dashboard",
    element: <div>owner</div>,
    children: [
      {
        path: "/owner dashboard",
        element: <div></div>,
      },
    ],
  },
  {
    path: "/renter dashboard",
    element: <div>owner</div>,
    children: [
      {
        path: "/renter dashboard",
        element: <div></div>,
      },
    ],
  },
]);
