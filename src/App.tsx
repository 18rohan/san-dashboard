import React, { lazy, Suspense, useEffect } from "react";
import Paper from "@mui/material/Paper";
import "./App.css";
import { GetAllUsers } from "./services/GetAllUsers";
import { Route, Routes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import AuthRoute from "containers/Routes/AuthRoute";
import { AuthProvider } from "provider/AuthProvider";

const Login = lazy(() => import("./views/Login"));
const SignUp = lazy(() => import("./views/Signup"));
const CreateOrder = lazy(() => import("./views/PaperBase"));
const CreateOrderForm = lazy(() => import("./components/CreateOrder"));

function App() {
  useEffect(() => {
    GetAllUsers();
  }, []);
  return (
    <Paper elevation={0}>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route
            path="/create-order"
            element={
              <AuthRoute>
                <CreateOrder>
                  <CreateOrderForm />
                  </CreateOrder>
              </AuthRoute>
            }
          />
        </Routes>
      </Suspense>
    </Paper>
  );
}

export default App;
