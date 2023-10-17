import { Box, Center, Flex } from "@chakra-ui/react";
import BurgerIcon from "@/assets/icons/BurgerIcon";
import MenuItem from "../atoms/MenuItem";
import HomeIcon from "@/assets/icons/HomeIcon";
import AddIcon from "@/assets/icons/AddIcon";
import CollapseMenuGroup from "../molecules/CollapseMenuGroup";
import { elements } from "@/utils/menuItems";

const SideBar = () => {
  return (
    <Flex w="200px" h="full" direction="column">
      <Center py="17px">
        <BurgerIcon width="32px" cursor="pointer" />
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
  );
};

export default SideBar;
