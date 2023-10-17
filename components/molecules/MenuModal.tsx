import { Box, Center, Image, SimpleGrid } from "@chakra-ui/react";
import MenuModalItem from "../atoms/MenuModalItem";
import DocumentModuleIcon from "@/assets/icons/MenuModalIcons/DocumentModuleIcon";
import { principalElements } from "@/utils/principalMenuItems";
import { useState } from "react";

const MenuModal = () => {
  const [activeElement, setActiveElement] = useState<number | null>(null);
  return (
    <Box mx="47px">
      <Center mt={20} mb={5}>
        <Image src="/logo.svg" alt="logo" width={200} mb={5} />
      </Center>
      <SimpleGrid columns={4} spacing="6px">
        {principalElements.map((element) => (
          <MenuModalItem
            key={element.id}
            icon={element.icon}
            active={activeElement}
            setActive={setActiveElement}
            id={element.id}
          >
            {element.title}
          </MenuModalItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MenuModal;
