import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/ui/NavBar";
import Gamegrid from "./components/ui/Gamegrid";
import GenreList from "./components/ui/GenreList";
function App() {
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
        <GenreList />
      </GridItem>
      <GridItem area={"main"} bg="bg" color="fg">
        <Gamegrid />
      </GridItem>
    </Grid>
  );
}

export default App;
