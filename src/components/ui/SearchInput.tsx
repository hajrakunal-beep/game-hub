import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}
export const SearchInput = ({ onSearch }: SearchInputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup
        startElement={<BsSearch />}
        startElementProps={{ color: "fg" }}
      >
        <Input
          ref={ref}
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
    </form>
  );
};

export default SearchInput;
