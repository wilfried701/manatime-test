import { Box } from "@chakra-ui/react";

type CirclePropsType = {
  color: string;
};
const Circle = ({ color }: CirclePropsType) => {
  return (
    <Box
      w="10px"
      bg={color}
      display="inline-block"
      minW="10px" // assure une largeur minimale
      minH="10px" // assure une hauteur minimale
      h="10px"
      borderRadius="50%"
    />
  );
};

export default Circle;
