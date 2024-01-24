import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Owner_Layout from "../Layout/Owner_Dashboard/Owner_Layout";
import Owner_Dashboard from "../Pages/Owner_Dashboard/Owner_Dashboard";
import Renter_Layout from "../Layout/Renter_Dashboard_layout/Renter_Layout";
import Renter_Dashboard from "../Pages/Renter_D/Renter_Dashboard";

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
    path: "/owner_dashboard",
    element: <Owner_Layout />,
    children: [
      {
        path: "/owner_dashboard",
        element: <Owner_Dashboard />,
      },
    ],
  },
  {
    path: "/renter_dashboard",
    element: <Renter_Layout />,
    children: [
      {
        path: "/renter_dashboard",
        element: <Renter_Dashboard />,
      },
    ],
  },
]);
