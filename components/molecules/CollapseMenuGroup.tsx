import { Box } from "@chakra-ui/react";
import MenuItemAccordion from "../atoms/MenuItemAccordion";
import MySpaceIcon from "@/assets/icons/MySpaceIcon";

type element = {
  icon: any;
  item: string;
  subItems: Array<string>;
};
type CollapseMenuGroupPropsType = {
  elements?: Array<element>;
};

const CollapseMenuGroup = ({ elements }: CollapseMenuGroupPropsType) => {
  return (
    <Box>
      {elements?.map((element) => (
        <MenuItemAccordion
          icon={<element.icon width="22px" />}
          subItems={element.subItems}
        >
          {element.item}
        </MenuItemAccordion>
      ))}
    </Box>
  );
};

export default CollapseMenuGroup;
