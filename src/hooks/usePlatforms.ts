import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;