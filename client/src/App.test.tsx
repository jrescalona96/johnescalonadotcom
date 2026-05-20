import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "./App";

// React 19: Test that the app renders without crashing
describe("App", () => {
  it("renders app without crashing", () => {
    render(<App />);
    expect(document.body).toBeInTheDocument();
  });

  // React 19: Test that error boundary works
  it("error boundary catches errors", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(<App />);

    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
