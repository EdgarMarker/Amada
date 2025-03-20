import React from "react";
import { callModal, useGSAP } from "../../../_lib/gsap/base";

interface Props {
  closeModalOf: string;
}

const SVG = () => (
  <svg
    width="30px"
    height="30px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill=""
      d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"
    />
  </svg>
);
const CloseModalBtn = ({ closeModalOf }: Props) => {
  const { contextSafe } = useGSAP();
  const handleModal = contextSafe(() => {
    callModal({ open: false, className: closeModalOf });
  });

  return (
    <div onClick={() => handleModal()} className="btn btn__closeModal">
      <SVG />
    </div>
  );
};

export default CloseModalBtn;
