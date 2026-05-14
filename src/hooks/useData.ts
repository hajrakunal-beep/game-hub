import axios from "axios";
import { useState, useEffect } from "react";
import { apiClient } from "../services/api-client";


interface FetchResponse <T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
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
  }, []);

  return { data, error, isLoading };
};

export default useData;