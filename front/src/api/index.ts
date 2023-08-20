import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface UserType {
  id: number;
  name: string;
  old: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchUsers = async (): Promise<{ data: UserType[] }> => {
  return await axios.get(`${BASE_URL}/users`);
};

export const createUser = async ({
  name,
  old,
}: {
  name: string;
  old: string;
}) => {
  const body = { name, old };
  return await axios.post(`${BASE_URL}/users/create`, body);
};

export const removeUser = async ({ id }: { id: number }) => {
  const body = { id };
  return await axios.post(`${BASE_URL}/users/remove`, body);
};

export const updateUser = async ({
  id,
  name,
  old,
}: {
  id: number;
  name: string;
  old: string;
}) => {
  const body = { id, name, old };
  return await axios.put(`${BASE_URL}/users/update`, body);
};

export const signin = async (id: string, pw: string) => {
  return await axios.post(`${BASE_URL}/signin`, { id, pw });
};
