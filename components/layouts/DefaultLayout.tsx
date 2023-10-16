import { Box, Flex } from "@chakra-ui/react";
import SideBar from "./SideBar";
import Header from "./Header";
import { ReactNode } from "react";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Flex>
      <Box>
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
