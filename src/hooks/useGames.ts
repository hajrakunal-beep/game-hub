import { useState, useEffect } from "react";
import { apiClient } from "../services/api-client";
import axios from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        if (axios.isCancel(error) || error.code === "ERR_CANCELED") return;

        setError(error.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error };
};
export default useGames;
