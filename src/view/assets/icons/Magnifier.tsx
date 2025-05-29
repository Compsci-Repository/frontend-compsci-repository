import type { SVGProps } from "react";

function Magnifier(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.917 20H18.833V18H20.917V20ZM18.833 18H16.75V16H18.833V18ZM12.583 16H4.25V14H12.583V16ZM16.75 16H14.667V14H16.75V16ZM4.25 14H2.16699V12H4.25V14ZM14.667 14H12.583V12H14.667V14ZM2.16699 12H0.0830078V4H2.16699V12ZM16.75 12H14.667V4H16.75V12ZM4.25 4H2.16699V2H4.25V4ZM14.667 4H12.583V2H14.667V4ZM12.583 2H4.25V0H12.583V2Z"
        fill="black"
      />
    </svg>
  );
}

export default Magnifier;
