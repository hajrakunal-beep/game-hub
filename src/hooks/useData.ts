import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { apiClient } from "../services/api-client";

interface FetchResponse <T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[]
) => {

  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { ...requestConfig, signal: controller.signal })
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error) || error.code === "ERR_CANCELED") return;

        setError(error.message);
        setLoading(false);

      });
    return () => controller.abort();
  }, deps? [...deps] : []);

  return { data, error, isLoading };
};

export default useData;