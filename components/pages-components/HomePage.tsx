import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import CustomButton from "../atoms/Button";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { table } from "@/utils/fakeDatas";

const HomePage = () => {
  const router = useRouter();
  useEffect(() => {
    const initialised = localStorage.getItem("init");
    console.log(initialised);
    if (!initialised) {
      localStorage.setItem("absences", JSON.stringify(table));
      localStorage.setItem("init", "true");
    }
  }, []);
  const handleClick = () => {
    router.push("/absence");
  };

  return (
    <Flex
      h="100vh"
      direction="column"
      justify="center"
      align="center"
      pb={10}
      p={3}
    >
      <Box>
        <Center>
          <Image src="/logo.svg" alt="logo" width={260} mb={5} />
        </Center>
        <Text fontSize="30px" textAlign="center" mb={3}>
          Bye bye le papier, bonjour l&apos;
          <Box as="span" color="brand.100">
            efficacité
          </Box>{" "}
          !
        </Text>
        <Text maxW="500px" textAlign="center" mb={8}>
          Congés & absences - Note de frais - Planning - Temps - Badgeuse
          virtuelle - Paie dématérialisée - Suivi RH
        </Text>
        <Center>
          <CustomButton
            background="brand.100"
            color="white"
            rounded="md"
            _hover={{ background: "blue.600" }}
            onClick={handleClick}
          >
            Acceder à l&apos;apllication
          </CustomButton>
        </Center>
      </Box>
    </Flex>
  );
};

export default HomePage;
