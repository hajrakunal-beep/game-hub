import { Button, Heading, HStack, Image, List } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import GameGenreSkeleton from "./GameGenreSkeleton";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = Array.from({ length: 15 }, (_, index) => index);
  // if (isLoading) {
  //   return <Spinner margin="auto" />;
  // }
  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3} textAlign="center">
        Genres
      </Heading>
      <List.Root w="full">
        {isLoading &&
          skeletons.map((skeleton) => (
            <List.Item key={skeleton}>
              <GameGenreSkeleton />
            </List.Item>
          ))}
        {data.map((genre) => (
          <List.Item key={genre.id} padding={2} w="full" minW={0}>
            <HStack align="flex-start" w="full" minW={0}>
              <Image
                boxSize="32px"
                flexShrink={0}
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background, 600)}
              />
              <Button
                variant="plain"
                display="block"
                flex="1"
                fontSize="lg"
                height="auto"
                minW={0}
                maxW="full"
                padding={0}
                justifyContent="flex-start"
                textAlign="left"
                whiteSpace="normal"
                overflowWrap="anywhere"
                wordBreak="break-word"
                lineHeight="short"
                _hover={{ textDecoration: "underline" }}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};
export default GenreList;
