import { SVGProps } from "react";

const ValidationIcon = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 21 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M7.13253 14.7054L0.307525 8.16802C-0.102508 7.77527 -0.102508 7.13846 0.307525 6.74567L1.79242 5.32332C2.20245 4.93053 2.86731 4.93053 3.27735 5.32332L7.875 9.72717L17.7227 0.294565C18.1327 -0.0981884 18.7976 -0.0981884 19.2076 0.294565L20.6925 1.71692C21.1025 2.10967 21.1025 2.74647 20.6925 3.13927L8.61746 14.7054C8.20739 15.0982 7.54257 15.0982 7.13253 14.7054Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ValidationIcon;
