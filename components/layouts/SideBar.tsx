import { Box, Center, Flex } from "@chakra-ui/react";
import BurgerIcon from "@/assets/icons/BurgerIcon";
import MenuItem from "../atoms/MenuItem";
import HomeIcon from "@/assets/icons/HomeIcon";
import AddIcon from "@/assets/icons/AddIcon";
import CollapseMenuGroup from "../molecules/CollapseMenuGroup";
import { elements } from "@/utils/menuItems";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuModal from "../molecules/MenuModal";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MotionBox = motion(Box);
  return (
    <>
      <Flex
        w="200px"
        h="full"
        direction="column"
        zIndex={3}
        position="relative"
        boxShadow="md"
      >
        <Center py="17px">
          <BurgerIcon
            width="32px"
            cursor="pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </Center>
        <MenuItem icon={<HomeIcon width="22px" />}>Accueil</MenuItem>
        <MenuItem icon={<AddIcon width="22px" />}>Ajouter</MenuItem>
        <Box
          background="#094694"
          bgGradient="linear(to bottom,#094694,#0281E3)"
          height="full"
        >
          <Box
            h="full"
            bgImage="url('/graphic.svg')"
            bgPosition="bottom"
            bgSize="200px"
            bgRepeat="no-repeat"
          >
            <CollapseMenuGroup elements={elements} />
          </Box>
        </Box>
      </Flex>
      <AnimatePresence>
        {isOpen && (
          <>
            <Box
              position="fixed"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="rgba(0, 0, 0, 0.4)"
              zIndex={1}
              backdropFilter="blur(4px)"
              onClick={() => setIsOpen(false)}
            />
            <MotionBox
              position="absolute"
              initial={{ x: -800 }}
              animate={{ x: 0 }}
              exit={{ x: -800 }}
              transition={{ duration: 0.3 }}
              zIndex={2}
              top="0"
              minH="100vh"
              opacity={1}
              background="white"
              pl={"200px"}
              w="1000px"
              borderRightRadius="40px"
            >
              <MenuModal />
            </MotionBox>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;
