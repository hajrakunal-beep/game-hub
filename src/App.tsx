import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { NavBar } from "./components/ui/NavBar";
import Gamegrid from "./components/ui/Gamegrid";
import GenreList from "./components/ui/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/ui/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { SortSelector } from "./components/ui/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      minH="100vh"
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      templateRows="auto 1fr"
    >
      <GridItem
        area={"nav"}
        bg="panel"
        color="fg"
        borderBottom="1px solid"
        borderColor="border"
      >
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <GridItem
        area={"aside"}
        padding={2}
        bg="panel"
        color="fg"
        borderRight="1px solid"
        borderColor="border"
        hideBelow="lg"
      >
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem area={"main"} bg="bg" color="fg">
        <HStack padding={4} paddingBottom={0} align="flex-start">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <Gamegrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
