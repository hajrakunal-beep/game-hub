import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch />} startElementProps={{ color: "fg" }}>
      <Input
        placeholder="Search games..."
        variant="subtle"
        bg="searchInput"
        color="fg"
        borderRadius={20}
        borderWidth={1}
        borderColor="searchInputBorder"
        _placeholder={{ color: "fg.muted" }}
        _hover={{ bg: "searchInput", borderColor: "gray.500" }}
        _focusVisible={{
          borderColor: "blue.400",
          boxShadow: "0 0 0 1px var(--chakra-colors-blue-400)",
        }}
      />
    </InputGroup>
  );
};

export default SearchInput;
