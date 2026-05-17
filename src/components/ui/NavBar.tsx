import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}
export const NavBar = ({ onSearch }: SearchInputProps) => {
  return (
    <HStack padding="6px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
