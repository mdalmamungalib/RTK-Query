import { createBrowserRouter } from "react-router-dom";
import Main from "./Components/Main/Main";
import Home from "./Pages/Home/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
