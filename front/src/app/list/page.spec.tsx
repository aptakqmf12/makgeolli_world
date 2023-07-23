import List from "./page";
import { render, screen } from "@testing-library/react";

it("Test List View", () => {
  render(<List />);

  const button = screen.getByRole("button");

  expect(button).toBeEnabled();
});
