import axios from "axios";
import { useState, useEffect } from "react";
import { apiClient } from "../services/api-client";


interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error) || error.code === "ERR_CANCELED") return;

        setError(error.message);
        setLoading(false);

      });
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;