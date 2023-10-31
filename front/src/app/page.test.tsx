import { screen, render } from "@testing-library/react";
import Home from "./page";

test("최초 렌더링", () => {
  render(<Home />);

  const listBox = screen.getByRole("listbox");

  expect(listBox).toHaveLength(7);
});
