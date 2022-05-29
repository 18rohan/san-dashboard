import React, { lazy } from "react";
// import {Outlet} from 'react-router-dom';

// components/Views
import Home from "../../views/PaperBase";
const Login = lazy(() => import("../../views/Login"));
const SignUp = lazy(() => import("../../views/Signup"));
const UserProfileLanding = lazy(
  () => import("../../components/UserProfileLanding")
);
const CreateOrderForm = lazy(()=>import("../../components/CreateOrder"))
export const appRoutes = [
  // Login (client/Admin)
  {
    path: "/",
    element: <Login />,
  },
  // Signup (client)
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/profile",
    element: (
      <Home>
        <UserProfileLanding />
      </Home>
    ),
  },
  {
      path:"/create-order",
      element:(
          <Home>
              <CreateOrderForm />
          </Home>
      )
  }
];

// Create Order form

// Clients List Table View

// Orders List Table View

// User(Client) dashboard

// User(Admin) dashboard

export default appRoutes;
