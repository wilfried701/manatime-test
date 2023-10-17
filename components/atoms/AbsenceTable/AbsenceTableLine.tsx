import AjustIcon from "@/assets/icons/AjustIcon";
import SolderIcon from "@/assets/icons/SolderIcon";
import TransferIcon from "@/assets/icons/TransferIcon";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Circle from "../Circle";
import CircleIcon from "@/assets/icons/CircleIcon";

type User = {
  user: string;
  category: string;
  period: string;
  currentBalance: number;
  balanceTaken: number;
  futureBalance: number;
};
type AbsenceTableLineProps = {
  item: User;
  number: number;
  length: number;
};

const AbsenceTableLine = ({ item, number, length }: AbsenceTableLineProps) => {
  const white = number % 2 !== 0;
  const lastElement = number === length - 1;
  console.log(number, length);
  return (
    <Flex
      background={white ? "white" : "#F2F2F2"}
      pl="15px"
      border="1px solid #C4C4C4"
      fontSize="16px"
      borderBottomRadius={lastElement ? "4px" : ""}
    >
      <Text flex={1} borderRight="1px solid #C4C4C4" py={2}>
        {item.user}
      </Text>
      <Flex
        flex={1}
        borderRight="1px solid #C4C4C4"
        py={2}
        pl="15px"
        align="center"
        gap={2}
        color="orange.400"
      >
        <CircleIcon width="12px" /> <Text color="#646464">{item.category}</Text>
      </Flex>
      <Text flex={1} borderRight="1px solid #C4C4C4" py={2} pl="15px">
        {item.period}
      </Text>
      <Text flex={1} borderRight="1px solid #C4C4C4" py={2} pl="15px">
        {item.currentBalance}
      </Text>
      <Text flex={1} borderRight="1px solid #C4C4C4" py={2} pl="15px">
        {item.balanceTaken}
      </Text>
      <Text flex={1} borderRight="1px solid #C4C4C4" py={2} pl="15px">
        {item.futureBalance}
      </Text>
      <Flex
        flex={1.5}
        borderRight="1px solid #C4C4C4"
        py={2}
        pl="15px"
        justify="space-around"
      >
        <AjustIcon width="32px" />
        <SolderIcon width="32px" />
        <TransferIcon width="32px" />
      </Flex>
    </Flex>
  );
};

export default AbsenceTableLine;
