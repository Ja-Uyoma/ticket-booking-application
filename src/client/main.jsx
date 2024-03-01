import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./error-page";
import Login, { loginAction } from "./routes/login";
import Register, { registerAction } from "./routes/register";
import Events, { eventsLoader, logoutAction } from "./routes/events";
import AddEvent from "./routes/addEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "register",
    element: <Register />,
    action: registerAction,
  },
  {
    path: "events",
    element: <Events />,
    loader: eventsLoader,
    action: logoutAction,
  },
  {
    path: "addEvent",
    element: <AddEvent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
