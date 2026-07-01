jest.mock("axios", () => ({
  get: jest.fn(() => new Promise(() => {})),
  post: jest.fn(),
  delete: jest.fn(),
}));

import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders the app shell", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/feelin' movie/i)).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: /track films you.ve watched/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/loading your cinematic picks/i)).toBeInTheDocument();
});
