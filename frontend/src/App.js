import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DefaultLayout from "./layout/DefaultLayout";

// importing routes;
const LoginPage = React.lazy(() => import("./pages/auth/Login"));
const RegisterPage = React.lazy(() => import("./pages/auth/Register"));

// check auth
function checkAuth() {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return true;
  }
  return true;
}

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} closeButton={false} />
      <BrowserRouter>
        <Suspense fallback={true}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="*"
              name="Home"
              element={
                checkAuth() ? (
                  <DefaultLayout />
                ) : (
                  <Navigate to={{ pathname: "/login" }} />
                )
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
