import { SVGProps } from "react";

const StripeTwoIcon = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 10 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.63388 8.58122C10.122 9.11375 10.122 9.97716 9.63388 10.5097L2.13388 18.6915C1.64573 19.224 0.854272 19.224 0.366117 18.6915C-0.122039 18.159 -0.122039 17.2956 0.366117 16.763L6.98223 9.54545L0.366117 2.32787C-0.122039 1.79534 -0.122039 0.931933 0.366117 0.3994C0.854272 -0.133133 1.64573 -0.133133 2.13388 0.3994L9.63388 8.58122Z"
        fill="#858585"
      />
    </svg>
  );
};

export default StripeTwoIcon;
