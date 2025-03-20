import React from "react";
import { callMenu, useGSAP } from "../../../_lib/gsap/base";

const SVG = () => (
  <svg
    width="30px"
    height="30px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill="#ffff"
      d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"
    />
  </svg>
);
const CloseNav = () => {
  const { contextSafe } = useGSAP();
  const handleMenu = contextSafe(() => {
    callMenu({ open: false });
  });
  return (
    <div onClick={() => handleMenu()}>
      <SVG />
    </div>
  );
};

export default CloseNav;
