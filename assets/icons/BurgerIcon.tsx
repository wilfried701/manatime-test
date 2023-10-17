import React, { SVGProps } from "react";

const BurgerIcon = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx="29" cy="3" r="3" fill="#727272" />
      <circle cx="29" cy="16" r="3" fill="#727272" />
      <circle cx="29" cy="29" r="3" fill="#727272" />
      <circle cx="16" cy="3" r="3" fill="#727272" />
      <circle cx="16" cy="16" r="3" fill="#727272" />
      <circle cx="16" cy="29" r="3" fill="#727272" />
      <circle cx="3" cy="3" r="3" fill="#727272" />
      <circle cx="3" cy="16" r="3" fill="#727272" />
      <circle cx="3" cy="29" r="3" fill="#727272" />
    </svg>
  );
};

export default BurgerIcon;
