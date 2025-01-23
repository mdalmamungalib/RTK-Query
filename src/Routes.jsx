import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Main from "./Layout/Main/Main";
import Users from "./Pages/Users/Users";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);
