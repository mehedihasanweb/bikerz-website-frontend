import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SingleNewsPage from "../pages/SingleNewsPage";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/dashbooard/DashboardHome";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import UpdatePage from "../pages/dashbooard/UpdatePage";
import CreateNews from "../pages/dashbooard/CreateNews";
import UserProfile from "../pages/dashbooard/UserProfile";
import PrivateRoute from "./PrivateRoute";
import OurShop from "../pages/OurShop";
import UpdateProfile from "../pages/dashbooard/UpdateProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/see-details/:id",
        element: <SingleNewsPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/bikes/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/our-shop",
        element: <OurShop />,
        loader: () => fetch("http://localhost:3000/bikes"),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "update-page/:id",
        element: <UpdatePage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/bikes/${params.id}`),
      },
      {
        path: "add-page",
        element: <CreateNews />,
      },
      {
        path: "user-profile",
        element: <UserProfile />,
      },
      {
        path: "user-profile/update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
]);