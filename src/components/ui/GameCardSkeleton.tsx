import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" width="100%" marginBottom={2} />
      <Card.Body>
        <SkeletonText noOfLines={4} gap={2} />
      </Card.Body>
    </Card.Root>
  );
};
