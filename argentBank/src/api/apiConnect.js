import axios from "axios";
import { BASE_URL } from "./config";

export function apiConnect() {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
