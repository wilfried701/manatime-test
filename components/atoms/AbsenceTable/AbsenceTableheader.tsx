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
      <Text width="13%" borderRight="1px solid #C4C4C4" py={2}>
        Utilisateurs
      </Text>
      <Text width="13%" borderRight="1px solid #C4C4C4" py={2} pl="15px">
        Catégorie
      </Text>
      <Text width="13%" borderRight="1px solid #C4C4C4" py={2} pl="15px">
        Période
      </Text>
      <Text width="13%" borderRight="1px solid #C4C4C4" py={2} pl="15px">
        Solde actuel
      </Text>
      <Text width="13%" borderRight="1px solid #C4C4C4" py={2} pl="15px">
        Solde pris
      </Text>
      <Text width="13%" borderRight="1px solid #C4C4C4" py={2} pl="15px">
        Solde futur
      </Text>
      <Text width="22%" borderRight="1px solid #C4C4C4" py={2} pl="15px"></Text>
    </Flex>
  );
};

export default AbsenceTableheader;
