import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type CustomButtonProps = {
  children: ReactNode;
} & ButtonProps;

const CustomButton = ({ children, ...rest }: CustomButtonProps) => {
  return (
    <Button
      background="brand.100"
      color="white"
      rounded="md"
      _hover={{ background: "blue.600" }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
