import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/Header";
import { createMemoryRouter, RouterProvider } from "react-router";

// Helper to render components with router context
const renderWithRouter = (component: React.ReactElement) => {
  const router = createMemoryRouter([
    {
      path: "/",
      element: component,
    },
  ]);
  return render(<RouterProvider router={router} />);
};

describe("Header Component", () => {
  it("renders the application title", () => {
    renderWithRouter(<Header />);
    expect(screen.getByText("Recipe Organizer")).toBeDefined();
  });

  it("renders navigation links", () => {
    renderWithRouter(<Header />);
    expect(screen.getByText("Home")).toBeDefined();
    expect(screen.getByText("All Recipes")).toBeDefined();
    expect(screen.getByText("Add Recipe")).toBeDefined();
  });
});
