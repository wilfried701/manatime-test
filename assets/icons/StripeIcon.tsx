import { SVGProps } from "react";

const StripeIcon = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 11 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.05558 6.74375C5.74874 7.08546 5.25126 7.08546 4.94442 6.74375L0.23013 1.49375C-0.0767112 1.15204 -0.0767111 0.59802 0.23013 0.256312C0.536971 -0.0853968 1.03446 -0.0853967 1.3413 0.256312L5.5 4.88759L9.6587 0.256313C9.96554 -0.0853959 10.463 -0.0853959 10.7699 0.256313C11.0767 0.598021 11.0767 1.15204 10.7699 1.49375L6.05558 6.74375Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default StripeIcon;
