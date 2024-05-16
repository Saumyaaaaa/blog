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
import CategoryPosts from "./pages/CategoryPosts";
import AuthorPosts from "./pages/AuthorPosts";
import Authors from "./pages/Authors";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";

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
        path: "posts/users/:id",
        element: <AuthorPosts />,
      },
      {
        path: "/post/categories/:id",
        element: <CategoryPosts />,
      },
      {
        path: "authors",
        element: <Authors/>,
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
        path: "posts/categories/:category",
        element: <CategoryPosts />,
      },
      {
        path: "myposts/:id",
        element: <Dashboard />,
      },
      {
        path: "posts/:id",
        element: <PostDetail />,
      },
      {
        path: "posts/:id/edit",
        element: <EditPosts />,
      },
      {
        path: "contact",
        element: <Contact />,
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
