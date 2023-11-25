import React from "react";
import { render, screen, act } from "@testing-library/react";
import MakgeolliView from "./page";
import axios from "axios";
import { makgeolliList } from "@/mock/handler";

jest.mock("axios");

test("렌더링시 info값이 없으면 Empty페이지를 보여줌", async () => {
  axios.get.mockResolvedValue({ data: null || undefined });

  await act(async () => {
    render(<MakgeolliView />);
  });

  const emptyBox = screen.getByText("정보가 없습니다.");
  expect(emptyBox).toBeInTheDocument();
});

test("info값이 있을때", async () => {
  axios.get.mockResolvedValue({ data: makgeolliList[1] });

  await act(async () => {
    render(<MakgeolliView />);
  });

  const title = screen.getByRole("heading", { name: /해창/i });
  expect(title).toBeInTheDocument();
});
