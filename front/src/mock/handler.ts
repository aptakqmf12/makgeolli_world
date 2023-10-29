import { Makgeolli } from "@/types";
import { rest } from "msw";

const makgeolliList: Makgeolli[] = [
  { id: "1", name: "느린마을", price: 3000 },
  { id: "2", name: "해창 12도", price: 18000 },
  { id: "3", name: "해창 9도", price: 12000 },
  { id: "4", name: "복순도가", price: 12000 },
  { id: "5", name: "담은", price: 10000 },
  { id: "6", name: "나루생 12도", price: undefined },
  { id: "7", name: "나루생 6도", price: 7000 },
];

export const handlers = [
  rest.get("/makgeolliList", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(makgeolliList));
  }),

  rest.get("/makgeolliView", (req, res, ctx) => {
    const url = new URL(req.url);
    const id = new URLSearchParams(url.searchParams).get("id");

    const data = makgeolliList.filter((obj) => obj.id === id)[0];
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.post("/makgeolli", (req, res, ctx) => {
    return res(ctx.status(201));
  }),
];
