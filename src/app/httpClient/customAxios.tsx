import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const instance: AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const attachToken = async (config: AxiosRequestConfig):Promise<AxiosRequestConfig> => {
  let token;
  if (typeof window === "undefined") {
    const { cookies } = await import("next/headers");
    token = cookies().get("token")?.value;
  } else {
    token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
  }
  if (token) {
    config.headers = config.headers ?? {};
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};

instance.interceptors.request.use(attachToken);

instance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    throw new Error(`Request failed: ${error.message}`);
  }
);

export default instance;
