import AbsenceIcon from "@/assets/icons/AbsenceIcon";
import HelpIcon from "@/assets/icons/HelpIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import {
  Box,
  Flex,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Text,
} from "@chakra-ui/react";
import image from "@/assets/images/photo.png";
import StripeTwoIcon from "@/assets/icons/StripeTwoIcon";
import Breadcrumb from "../atoms/Breadcrumb";
import SoldeIcon from "@/assets/icons/SoldeIcon";
import { useRouter } from "next/router";
import MySpaceIcon from "@/assets/icons/MySpaceIcon";
import HomeIcon from "@/assets/icons/HomeIcon";
import AddIcon from "@/assets/icons/AddIcon";
import ValidationIcon from "@/assets/icons/ValidationIcon";
import IndicatorIcon from "@/assets/icons/IndicatorIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import LogoutIcon from "@/assets/icons/LogoutIcon";

const Header = () => {
  const router = useRouter();
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
          <Show above="lg">
            <Breadcrumb />
          </Show>
        </Flex>
      </Box>
      <Flex>
        <Show above="sm">
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
        </Show>

        <Menu>
          <MenuButton>
            <Image
              my="12px"
              mx="30px"
              width="42px"
              height="42px"
              alt="avatar"
              src={image.src}
            />
          </MenuButton>
          <MenuList>
            <Show below="md">
              <MenuItem>
                <Flex align="center" gap={4}>
                  <HomeIcon width="20px" color="#0090F5" />{" "}
                  <Text mt={1}>Accueil</Text>
                </Flex>
              </MenuItem>
              <MenuItem>
                <Flex align="center" gap={4}>
                  <AddIcon width="20px" color="#0090F5" />{" "}
                  <Text mt={1}>Ajouter</Text>
                </Flex>
              </MenuItem>
              <MenuItem>
                <Flex align="center" gap={4}>
                  <MySpaceIcon width="20px" color="#0090F5" />{" "}
                  <Text mt={1}>Mon espace</Text>
                </Flex>
              </MenuItem>
              <MenuItem>
                <Flex align="center" gap={4}>
                  <ValidationIcon width="20px" color="#0090F5" />{" "}
                  <Text mt={1}> Validation</Text>
                </Flex>
              </MenuItem>
              <MenuItem>
                <Flex align="center" gap={4}>
                  <IndicatorIcon width="20px" color="#0090F5" />{" "}
                  <Text mt={1}> Indicateurs</Text>
                </Flex>
              </MenuItem>
              <MenuItem>
                <Flex align="center" gap={4}>
                  <SoldeIcon width="20px" color="#0090F5" />{" "}
                  <Text mt={1}>Soldes</Text>
                </Flex>
              </MenuItem>
              <MenuItem>
                <Flex align="center" gap={4}>
                  <SearchIcon width="20px" color="#0090F5" />{" "}
                  <Text mt={1}>Recherche</Text>
                </Flex>
              </MenuItem>
            </Show>
            <MenuItem onClick={() => router.push("/")}>
              <Flex align="center" gap={4}>
                <LogoutIcon width="22px" color="#0090F5" />{" "}
                <Text>Déconnexion</Text>
              </Flex>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
