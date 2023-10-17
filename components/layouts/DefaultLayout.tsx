import { Box, Flex } from "@chakra-ui/react";
import SideBar from "./SideBar";
import Header from "./Header";
import { ReactNode } from "react";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Flex h="100vh" maxH="100vh">
      <Box h="full">
        <SideBar />
      </Box>
      <Box>
        <Header />
        {children}
      </Box>
    </Flex>
  );
};

export default DefaultLayout;
