jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ data: { records: [] } })),
  post: jest.fn(),
  delete: jest.fn(),
}));

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
  expect(screen.getByRole("heading", { name: /your personal film journal/i })).toBeInTheDocument();
});
