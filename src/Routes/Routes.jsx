import { createBrowserRouter } from "react-router-dom";

export const router = new createBrowserRouter([
  {
    path: "/",
    element: <div>lehri</div>,
    children: [
      {
        path: "/",
        element: <div></div>,
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
        path: "/owner dashboard",
        element: <div></div>,
      },
    ],
  },
]);
