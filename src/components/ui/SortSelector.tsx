import { Menu, Button, Portal, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
export const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "relevance", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );
  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button
            variant="outline"
            bg="filterControl"
            color="fg"
            borderColor="filterControlBorder"
            gap={2}
            _hover={{ bg: "filterControlHover", borderColor: "gray.500" }}
            _expanded={{ bg: "filterControlHover", borderColor: "gray.500" }}
          >
            <Text as="span">Order by:</Text>
            <Text as="span">{currentSortOrder?.label || "Relevance"}</Text>
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
              {sortOrders.map((order) => (
                <Menu.Item
                  onClick={() => onSelectSortOrder(order.value)}
                  key={order.value}
                  value={order.value}
                >
                  {order.label}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
};
