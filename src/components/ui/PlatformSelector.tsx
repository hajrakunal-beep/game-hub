import { Box, Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../../hooks/usePlatforms";
import { Platform } from "../../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
export const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;

  return (
    <Box padding={4} paddingBottom={0}>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button
            variant="outline"
            bg="panel"
            color="fg"
            borderColor="border"
            gap={2}
            _hover={{ bg: "bg", borderColor: "gray.500" }}
            _expanded={{ bg: "bg", borderColor: "gray.500" }}
          >
            {selectedPlatform?.name || "Platforms"}
            <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content
              bg="panel"
              color="fg"
              borderWidth="1px"
              borderColor="border"
              borderRadius="md"
              boxShadow="lg"
              minW="160px"
              overflow="hidden"
              zIndex="dropdown"
            >
              {data.map((platform) => (
                <Menu.Item
                  onClick={() => onSelectPlatform(platform)}
                  key={platform.id}
                  value={platform.slug}
                  cursor="pointer"
                  _highlighted={{ bg: "gray.800", color: "white" }}
                >
                  {platform.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default PlatformSelector;
