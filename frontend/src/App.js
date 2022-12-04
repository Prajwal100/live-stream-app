import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import DefaultLayout from "./layout/DefaultLayout";
import Loadable from "react-loadable";
// importing routes;

const SignIn = Loadable({
  loader: () => import("./pages/auth/SignIn"),
  loading: Loading,
});
function Loading() {
  return <div>Loading...</div>;
}
const SignUp = Loadable({
  loader: () => import("./pages/auth/SignUp"),
  loading: Loading,
});
// const Page404 = React.lazy(() => import("./pages/Page404"));

// check auth
function checkAuth() {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    console.log("acc", accessToken);

    return true;
  }
  console.log("false acc", accessToken);

  return false;
}

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <Suspense fallback={true}>
          <Routes>
            {/* AUTH ROUTES STARTS */}
            <Route
              exact
              path="/signin"
              name="signin Page"
              element={
                checkAuth() ? (
                  <Navigate to={{ pathname: "/dashboard" }} />
                ) : (
                  <SignIn />
                )
              }
            />
            <Route
              path="/signup"
              element={
                checkAuth() ? (
                  <Navigate to={{ pathname: "/dashboard" }} />
                ) : (
                  <SignUp />
                )
              }
            />

            {/* AUTH ROUTES ENDS */}
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
