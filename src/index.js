import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPost from "./pages/ErrorPost";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import UserProfile from "./pages/UserProfile";
import CreatePosts from "./pages/CreatePosts";
import EditPosts from "./pages/EditPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPost />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts/:id",
        element: <PostDetail />,
      },
      {
        path: "profile/:id",
        element: <UserProfile />,
      },
      {
        path: "create",
        element: <CreatePosts />,
      },
      {
        path: "posts/:id/edit",
        element: <EditPosts />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
