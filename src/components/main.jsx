import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AboutMe from "./pages/AboutMe.jsx";
import Contact from "./pages/Contact.jsx";
import Resume from "./pages/Resume.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "AboutMe",
        element: <AboutMe />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
