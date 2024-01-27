import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";

describe("Login", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });
});

describe("Register", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
  });
});
