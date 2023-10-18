import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/roboto";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `Poppins, sans-serif`,
    roboto: `Roboto, sans-serif`,
  },
  colors: {
    brand: {
      100: "#0090F5",
      900: "#1a202c",
    },
  },
});

export default theme;
