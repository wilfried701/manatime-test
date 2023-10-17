import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const AbsenceTableheader = () => {
  return (
    <Flex
      background="white"
      pl="15px"
      border="1px solid #C4C4C4"
      borderTopRadius="4px"
      fontSize="16px"
      fontWeight="semibold"
      color="#494949"
    >
      <Text flex={1} borderRight="1px solid #C4C4C4" py={2}>
        Utilisateurs
      </Text>
      <Text flex={1} borderRight="1px solid #C4C4C4" py={2} pl="15px">
        Catégorie
      </Text>
      <Text flex={1} borderRight="1px solid #C4C4C4" py={2} pl="15px">
        Période
      </Text>
      <Text flex={1} borderRight="1px solid #C4C4C4" py={2} pl="15px">
        Solde actuel
      </Text>
      <Text flex={1} borderRight="1px solid #C4C4C4" py={2} pl="15px">
        Solde pris
      </Text>
      <Text flex={1} borderRight="1px solid #C4C4C4" py={2} pl="15px">
        Solde futur
      </Text>
      <Text flex={1.5} borderRight="1px solid #C4C4C4" py={2} pl="15px"></Text>
    </Flex>
  );
};

export default AbsenceTableheader;
