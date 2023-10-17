import AbsenceIcon from "@/assets/icons/AbsenceIcon";
import HelpIcon from "@/assets/icons/HelpIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import image from "@/assets/images/photo.png";
import StripeTwoIcon from "@/assets/icons/StripeTwoIcon";
import Breadcrumb from "../atoms/Breadcrumb";
import SoldeIcon from "@/assets/icons/SoldeIcon";

const Header = () => {
  return (
    <Flex
      w="full"
      justify="space-between"
      align="center"
      boxShadow="sm"
      background="white"
    >
      <Box ml="30px">
        <Flex align="center" gap="30px">
          <AbsenceIcon width="39px" />
          <Heading fontWeight="medium" fontSize="24px" color="#494949">
            Absence
          </Heading>
          <Breadcrumb />
        </Flex>
      </Box>
      <Flex>
        <Flex gap="10px" pr="30px" borderRight="1px solid #858585" my="12px">
          <HelpIcon width="42px" />
          <SettingsIcon width="42px" />
        </Flex>
        <Box ml="30px" my="12px">
          <Text fontSize="16px" color="#494949" textAlign="center">
            Nom et Prénom
          </Text>
          <Text fontSize="14px" color="#858585" textAlign="center">
            Entreprise
          </Text>
        </Box>
        <Image my="12px" mx="30px" width="42px" height="42px" alt="avatar" src={image.src} />
      </Flex>
    </Flex>
  );
};

export default Header;
