import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./App.jsx";
import "./assets/index.css";
import AboutMe from "./components/pages/AboutMe.jsx";
import Contact from "./components/pages/ContactPage.jsx";
import Resume from "./components/pages/Resume.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import HomePage from "./components/pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: '/AboutMe', element: <AboutMe /> },
      { path: '/ContactPage', element: <Contact /> },
      { path: '/Resume', element: <Resume /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);