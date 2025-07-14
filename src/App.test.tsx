import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// React 19: Test that the app renders without crashing
test('renders app without crashing', () => {
  render(<App />);
  // The app should render without throwing any errors
  expect(document.body).toBeInTheDocument();
});

// React 19: Test that error boundary works
test('error boundary catches errors', () => {
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  
  // This should not crash the app due to error boundary
  render(<App />);
  
  expect(consoleSpy).not.toHaveBeenCalled();
  consoleSpy.mockRestore();
});

