import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "./color-mode";

const ColorModeSwitch = () => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root
        colorPalette="green"
        checked={colorMode === "dark"}
        onCheckedChange={({ checked }: { checked: boolean }) =>
          setColorMode(checked ? "dark" : "light")
        }
      >
        <Switch.HiddenInput />
        <Switch.Control />
      </Switch.Root>
      <Text>{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
