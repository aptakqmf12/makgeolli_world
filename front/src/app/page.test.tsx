import { screen, render } from "@testing-library/react";
import Home from "./page";
import { makgeolliList } from "@/mock/handler";

test("최초 렌더링", () => {
  render(<Home />);

  const listBox = screen.getByRole("listbox");

  expect(listBox).toHaveLength(makgeolliList.length);
});
