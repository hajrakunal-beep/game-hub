import { Menu, Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export const SortSelector = () => {
  return (
    <>
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
            Order by: Relevance
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
              <Menu.Item value="relevance">Relevance</Menu.Item>
              <Menu.Item value="date added">Date added</Menu.Item>
              <Menu.Item value="name">Name</Menu.Item>
              <Menu.Item value="released date">Released date</Menu.Item>
              <Menu.Item value="popularity">Popularity</Menu.Item>
              <Menu.Item value="average rating">Average rating</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
};
