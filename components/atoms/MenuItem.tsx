import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type MenuItemProps = {
  icon: ReactNode;
  children: string;
  background?: string;
};

const MenuItem = ({
  icon,
  children,
  background = "#0090F5",
}: MenuItemProps) => {
  return (
    <Flex
      background={background}
      fontSize="18px"
      h="66px"
      minH="66px"
      align="center"
      justify="space-between"
      color="white"
      pl="20px"
      pr="68px"
      borderTop="1px solid #00A6FF"
      borderBottom="1px solid #0084E1"
      cursor="pointer"
    >
      {icon}
      {children}
    </Flex>
  );
};

export default MenuItem;
