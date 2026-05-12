import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/ui/NavBar";
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
      <GridItem area={"nav"} bg="black" color="white" borderBottom="1px solid white">
        <NavBar />
      </GridItem>
      <GridItem area={"aside"} bg="black" color="white" borderRight="1px solid white" hideBelow="lg">
        Aside
      </GridItem>
      <GridItem area={"main"} bg="white" color="black">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
