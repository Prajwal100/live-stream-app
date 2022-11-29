import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import DefaultLayout from "./layout/DefaultLayout";

// importing routes;
const SignIn = React.lazy(() => import("./pages/auth/SignIn"));
const SignUp = React.lazy(() => import("./pages/auth/SignUp"));
const Page404 = React.lazy(() => import("./pages/Page404"));

// check auth
function checkAuth() {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return true;
  }
  return false;
}

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <Suspense fallback={true}>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/404" element={<Page404 />} /> */}
            <Route
              path="*"
              name="Home"
              element={
                checkAuth() ? (
                  <DefaultLayout />
                ) : (
                  <Navigate to={{ pathname: "/signin" }} />
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
