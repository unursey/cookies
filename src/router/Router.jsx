import { createBrowserRouter } from "react-router-dom";
import { Page } from "../views/Page/Page.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page pathname="home" />
  },
  {
    path: "*",
    element: <Page pathname="notfound" />
  }
]);
