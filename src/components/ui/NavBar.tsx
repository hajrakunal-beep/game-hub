import { Button, HStack, IconButton, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";
import { BsCurrencyDollar, BsPerson } from "react-icons/bs";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}
export const NavBar = ({ onSearch }: SearchInputProps) => {
  return (
    <HStack padding="6px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <Button variant="outline" size="sm">
        <BsCurrencyDollar />
        Prices
      </Button>
      <ColorModeSwitch />
      <IconButton
        aria-label="Login"
        variant="outline"
        size="sm"
        borderRadius="full"
        borderColor="gray.500"
      >
        <BsPerson />
      </IconButton>
    </HStack>
  );
};
export default NavBar;
