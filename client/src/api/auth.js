import { instance as axios } from "./config";

export const registerRequest = (user) => axios.post("/auth/register", user);
