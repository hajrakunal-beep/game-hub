import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading =
    `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games` ||
    "All Games";
  return (
    <Heading as="h1" fontSize="5xl" marginY={2} padding={4} color="fg">
      {heading}
    </Heading>
  );
};
