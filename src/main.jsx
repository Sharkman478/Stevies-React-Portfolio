import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./App.jsx";
import "./assets/index.css";
import AboutMe from "./components/pages/AboutMe.jsx";
import Contact from "./components/pages/ContactPage.jsx";
import Projects from "./components/pages/Projects.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import Resume from "./components/pages/Resume.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/AboutMe', element: <AboutMe /> },
      { path: '/ContactPage', element: <Contact /> },
      { path: '/Projects', element: <Projects /> },
      { path: '/Resume', element: <Resume /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);