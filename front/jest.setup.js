import "@testing-library/jest-dom";
import { server } from "@/mock/worker";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
