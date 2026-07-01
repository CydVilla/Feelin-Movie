jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: { records: [] } })),
  post: jest.fn(),
  delete: jest.fn(),
}));

import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import App from "./App";

test("renders the app shell", async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  await act(async () => {
    await Promise.resolve();
  });

  expect(screen.getByText(/feelin' movie/i)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /your personal film journal/i })).toBeInTheDocument();
  expect(screen.getByText(/nothing here yet/i)).toBeInTheDocument();
});
