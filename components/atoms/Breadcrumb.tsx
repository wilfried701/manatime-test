import SoldeIcon from "@/assets/icons/SoldeIcon";
import StripeTwoIcon from "@/assets/icons/StripeTwoIcon";
import { Box, Flex, Heading } from "@chakra-ui/react";

const Breadcrumb = () => {
  return (
    <Flex gap="30px">
      <StripeTwoIcon width="10px" />
      <Box color="#858585">
        <SoldeIcon width="26px" />
      </Box>
      <Heading as="h3" fontWeight="medium" fontSize="18px" color="#494949">
        Sous module
      </Heading>
      <StripeTwoIcon width="10px" />
      <Heading as="h3" fontWeight="medium" fontSize="16px" color="#494949">
        Sous sous module
      </Heading>
    </Flex>
  );
};

export default Breadcrumb;
