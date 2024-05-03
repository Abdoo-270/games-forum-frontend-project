import axios from "axios";

const productionUrl = "your_backend_server";

export const customFetch = axios.create({
  baseURL: productionUrl,
});
