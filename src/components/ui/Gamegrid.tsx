import { SimpleGrid } from "@chakra-ui/react";
import useGames, { Platform } from "../../hooks/useGames";
import GameCard from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { Genre } from "../../hooks/useGenres";

interface GamegridProps {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
const Gamegrid = ({ selectedGenre, selectedPlatform }: GamegridProps) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error ? <p>Error: {error}</p> : null}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        padding={4}
        gap={4}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
