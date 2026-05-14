import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameGenreSkeleton = () => {
  return (
    <HStack padding={2}>
      <Skeleton boxSize="32px" borderRadius={8} />
      <SkeletonText noOfLines={1} width="120px" />
    </HStack>
  );
};

export default GameGenreSkeleton;
