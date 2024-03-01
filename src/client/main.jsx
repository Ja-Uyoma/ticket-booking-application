import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./error-page";
import Login, { loginAction } from "./routes/login";
import Register, { registerAction } from "./routes/register";
import Events, { eventsLoader, action as getEventsAction } from "./routes/events";
import CreateEvent, { createEventAction } from "./routes/addEvent";
import EditEvent, { action as editEventAction, loader as editEventLoader } from "./routes/EditEvent";
import Event, { loader as eventDetailsLoader, action as bookEventAction } from "./routes/ViewEvent";

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
    action: getEventsAction,
  },
  {
    path: "ViewEvent/:eventID",
    element: <Event />,
    loader: eventDetailsLoader,
    action: bookEventAction,
  },
  {
    path: "createEvent",
    element: <CreateEvent />,
    action: createEventAction,
  },
  {
    path: "EditEvent/:eventID",
    element: <EditEvent />,
    loader: editEventLoader,
    action: editEventAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
