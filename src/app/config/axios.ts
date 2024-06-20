import axios from "axios";
import { appEnv } from "./appEnv";

axios.interceptors.request.use(async (config) => {
  config.baseURL = appEnv.NEXT_PUBLIC_API_URL;

  return config;
});

export default axios;
