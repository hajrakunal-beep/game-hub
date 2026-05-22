import { Box, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import { NavBar } from "./components/ui/NavBar";
import Gamegrid from "./components/ui/Gamegrid";
import GenreList from "./components/ui/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/ui/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { SortSelector } from "./components/ui/SortSelector";
import { GameHeading } from "./components/ui/GameHeading";
import { LoginPage } from "./LoginPage";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

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
        display="flex"
        flexDirection="column"
      >
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
        <Box
          as="footer"
          marginTop="auto"
          paddingTop={6}
          paddingX={2}
          paddingBottom={3}
          color="fg.muted"
          fontSize="sm"
          lineHeight="short"
        >
          <Text>&copy; {new Date().getFullYear()} Game Hub</Text>
          <Text marginTop={2}>Game data for browsing and discovery.</Text>
          <Text marginTop={2}>Built with React and Chakra UI.</Text>
          <Text marginTop={2}>
            This is a demo website created for learning purposes and not to be
            used for commercial purposes.
          </Text>
        </Box>
      </GridItem>
      <GridItem area={"main"} bg="bg" color="fg">
        <GameHeading gameQuery={gameQuery} />
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
