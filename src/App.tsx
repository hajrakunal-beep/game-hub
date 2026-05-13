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
      <GridItem area={"nav"} bg="panel" color="fg" borderBottom="1px solid" borderColor="border">
        <NavBar />
      </GridItem>
      <GridItem area={"aside"} bg="panel" color="fg" borderRight="1px solid" borderColor="border" hideBelow="lg">
        Aside
      </GridItem>
      <GridItem area={"main"} bg="bg" color="fg">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
