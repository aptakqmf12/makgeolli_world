import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./page";

import { AppRouterContext } from "next/dist/shared/lib/app-router-context";
import { rest } from "msw";
import { server } from "../mock/worker";

// useRouter 모킹
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      route: "/",
    };
  },
}));

describe("메인페이지에 관한 테스트", () => {
  test("메인페이지가 로드시 heading확인", async () => {
    render(<Home />);

    await waitFor(() => {
      expect(
        screen.getByRole("heading", {
          name: /막걸리 리스트/i,
        })
      ).toBeInTheDocument();
    });
  });

  test("select 클릭시 Options가 나타남", async () => {
    const user = userEvent.setup();

    render(<Home />);

    // render(<AppRouterContext.Provider value={}></AppRouterContext.Provider>);

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();

    await user.click(select);

    // const listbox = screen.getByRole("listbox");
    // expect(listbox).toBeInTheDocument();
  });

  test.skip("서버에서 에러 응답이 왔을경우", async () => {
    // server.resetHandlers(
    //   rest.get("http:localhost:3001/makgeolliList", (req, res, ctx) => {
    //     res(ctx.status(500));
    //   })
    // );
    // render(<Home />);
    // const alert = await screen.findByRole("alert", { name: /네트워크 에러/i });
  });
});
