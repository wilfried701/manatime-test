import { Box, Flex, Show } from "@chakra-ui/react";
import SideBar from "./SideBar";
import Header from "./Header";
import { ReactNode } from "react";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Flex h="100vh" maxH="100vh" w="full">
      <Show above="md">
        <Box h="full">
          <SideBar />
        </Box>
      </Show>

      <Box w="full" h="100vh" overflowY="auto" background="#E3E3E3">
        <Header />
        {children}
      </Box>
    </Flex>
  );
};

export default DefaultLayout;
