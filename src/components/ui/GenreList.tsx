import { Button, HStack, Image, List } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import GameGenreSkeleton from "./GameGenreSkeleton";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = Array.from({ length: 15 }, (_, index) => index);
  // if (isLoading) {
  //   return <Spinner margin="auto" />;
  // }
  if (error) return null;

  return (
    <List.Root>
      {isLoading &&
        skeletons.map((skeleton) => (
          <List.Item key={skeleton}>
            <GameGenreSkeleton />
          </List.Item>
        ))}
      {data.map((genre) => (
        <List.Item key={genre.id} padding={2}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background, 600)}
            />
            <Button
              variant="plain"
              fontSize="lg"
              padding={0}
              _hover={{ textDecoration: "underline" }}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};
export default GenreList;
