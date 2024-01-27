import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "./components/loading";

import "./index.css";

const Register = lazy(() => import("./pages/register"));
const Login = lazy(() => import("./pages/login"));

const AppRouter = createBrowserRouter([
  {
    path: "/auth/login",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/auth/register",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <div
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    ),
  },
]);

export default AppRouter;
