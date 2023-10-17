import { SVGProps } from "react";

const AjustIcon = ({ ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#008CF2" />
      <path
        d="M11.4286 23.5L11.4286 13L12 13C12.3143 13 12.5714 12.775 12.5714 12.5L12.5714 11.5C12.5714 11.225 12.3143 11 12 11L11.4286 11L11.4286 8.5C11.4286 8.225 11.1714 8 10.8571 8L9.71429 8C9.4 8 9.14286 8.225 9.14286 8.5L9.14286 11L8.57143 11C8.25714 11 8 11.225 8 11.5L8 12.5C8 12.775 8.25714 13 8.57143 13L9.14286 13L9.14286 23.5C9.14286 23.775 9.4 24 9.71428 24L10.8571 24C11.1714 24 11.4286 23.775 11.4286 23.5ZM17.1429 23.5L17.1429 21L17.7143 21C18.0286 21 18.2857 20.775 18.2857 20.5L18.2857 19.5C18.2857 19.225 18.0286 19 17.7143 19L17.1429 19L17.1429 8.5C17.1429 8.225 16.8857 8 16.5714 8L15.4286 8C15.1143 8 14.8571 8.225 14.8571 8.5L14.8571 19L14.2857 19C13.9714 19 13.7143 19.225 13.7143 19.5L13.7143 20.5C13.7143 20.775 13.9714 21 14.2857 21L14.8571 21L14.8571 23.5C14.8571 23.775 15.1143 24 15.4286 24L16.5714 24C16.8857 24 17.1429 23.775 17.1429 23.5ZM22.8571 23.5L22.8571 17L23.4286 17C23.7429 17 24 16.775 24 16.5L24 15.5C24 15.225 23.7429 15 23.4286 15L22.8571 15L22.8571 8.5C22.8571 8.225 22.6 8 22.2857 8L21.1429 8C20.8286 8 20.5714 8.225 20.5714 8.5L20.5714 15L20 15C19.6857 15 19.4286 15.225 19.4286 15.5L19.4286 16.5C19.4286 16.775 19.6857 17 20 17L20.5714 17L20.5714 23.5C20.5714 23.775 20.8286 24 21.1429 24L22.2857 24C22.6 24 22.8571 23.775 22.8571 23.5Z"
        fill="#0090F5"
      />
    </svg>
  );
};

export default AjustIcon;