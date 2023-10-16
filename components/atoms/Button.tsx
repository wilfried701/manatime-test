import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type CustomButtonProps = {
  children: ReactNode;
} & ButtonProps;

const CustomButton = ({ children, ...rest }: CustomButtonProps) => {
  return (
    <Button background="blue" {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;
