import { createBrowserRouter } from "react-router-dom";
import { Page } from "../views/Page/Page.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page pathname="home" />
  },
  {
    path: "/category",
    element: <Page pathname="category" />
  },
  {
    path: "/cartForm",
    element: <Page pathname="cartForm" />
  },
  {
    path: "/order/:orderId",
    element: <Page pathname="order" />
  },
  {
    path: "*",
    element: <Page pathname="notfound" />
  }
]);
