import { Box, Flex, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

type MenuModalItemPropsType = {
  icon: any;
  children: string;
  active: number | null;
  setActive: Dispatch<SetStateAction<number | null>>;
  id: number;
};

const MenuModalItem = ({
  icon,
  children,
  active,
  id,
  setActive,
}: MenuModalItemPropsType) => {
  const isActive = active === id;
  return (
    <Flex
      borderRadius="10px"
      direction="column"
      border={isActive ? "2px solid #0090F5" : "1px solid #D4D4D4"}
      width="170px"
      height="170px"
      justify={"center"}
      align={"center"}
      cursor="pointer"
      onClick={() => setActive(id)}
    >
      {icon}
      <Text color={isActive ? "#0090F5" : "#494949"}>{children}</Text>
    </Flex>
  );
};

export default MenuModalItem;
