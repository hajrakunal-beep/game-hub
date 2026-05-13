import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number | null;
}
export const CriticScore = ({ score }: Props) => {
  if (!score) return null;

  const color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge
      colorPalette={color}
      variant="solid"
      fontSize="14px"
      paddingX={2}
      borderRadius={5}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
