import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game, Platform } from "../../hooks/useGames";
import GameCard from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { Genre } from "../../hooks/useGenres";
import { GameQuery } from "../../App";

interface GamegridProps {
  gameQuery: GameQuery;
}
const Gamegrid = ({ gameQuery }: GamegridProps) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} padding={6} gap={4}>
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default Gamegrid;
