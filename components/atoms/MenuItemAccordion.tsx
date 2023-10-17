import StripeIcon from "@/assets/icons/StripeIcon";
import { Box, Collapse, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type MenuItemProps = {
  icon: ReactNode;
  children: string;
  background?: string;
  subItems?: Array<string>;
};

const MenuItemAccordion = ({
  icon,
  children,
  background = "#0090F5",
  subItems,
}: MenuItemProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const MotionBox = motion(Box);

  return (
    <Box borderBottom={"2px solid #0569C2"} background={isOpen ? "white" : ""}>
      <Flex
        fontSize="18px"
        h="66px"
        maxH="66px"
        align="center"
        justify="space-between"
        color={isOpen ? "#084693" : "white"}
        cursor="pointer"
        onClick={onToggle}
      >
        <Flex ml="20px" gap={3}>
          {icon}
          {children}
        </Flex>

        <MotionBox
          as="span"
          initial={{ rotate: 0 }}
          animate={isOpen ? { rotateX: 180 } : {}}
          mr="15px"
        >
          <StripeIcon height="7px" width="11px" />
        </MotionBox>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        {subItems?.map((subItem) => (
          <Text
            py={1}
            cursor="pointer"
            textAlign="right"
            mr="15px"
            fontSize="16px"
            mb={1}
          >
            {subItem}
          </Text>
        ))}
      </Collapse>
    </Box>
  );
};

export default MenuItemAccordion;
