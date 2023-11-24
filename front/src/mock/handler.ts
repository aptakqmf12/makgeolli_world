import { Makgeolli } from "@/types";
import { rest } from "msw";
import LIST from "./makgeolliList.json";

export const makgeolliList: Makgeolli[] = LIST;

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
