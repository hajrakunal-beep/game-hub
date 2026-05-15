import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/ui/NavBar";
import Gamegrid from "./components/ui/Gamegrid";
import GenreList from "./components/ui/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/ui/PlatformSelector";
import { Platform } from "./hooks/useGames";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );

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
        <NavBar />
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
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>
      <GridItem area={"main"} bg="bg" color="fg">
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <Gamegrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
