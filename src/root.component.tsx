import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./main";

export default function Root() {
  return (
    <StrictMode>
      <RouterProvider router={AppRouter} />
    </StrictMode>
  );
}
