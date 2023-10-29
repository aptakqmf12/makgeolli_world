import axios from "axios";

export interface UserType {
  id: number;
  name: string;
  old: string;
}

interface UserInfo {
  name: string;
  old: string;
}

interface UserRequest {
  id: number;
  name: string;
  old: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchUsers = async (): Promise<{ data: UserType[] }> => {
  return await axios.get(`${BASE_URL}/users`);
};

export const createUser = async ({ name, old }: UserInfo) => {
  return await axios.post(`${BASE_URL}/users/create`, { name, old });
};

export const removeUser = async ({ id }: { id: number }) => {
  return await axios.post(`${BASE_URL}/users/remove`, { id });
};

export const updateUser = async ({ id, name, old }: UserRequest) => {
  return await axios.put(`${BASE_URL}/users/update`, { id, name, old });
};

export const signin = async (id: string, pw: string) => {
  return await axios.post(`${BASE_URL}/signin`, { id, pw });
};
