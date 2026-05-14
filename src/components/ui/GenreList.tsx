import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import GameGenreSkeleton from "./GameGenreSkeleton";

const GenreList = () => {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};
export default GenreList;
