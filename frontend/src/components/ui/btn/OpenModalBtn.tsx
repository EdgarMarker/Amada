import React from "react";
import { callModal, useGSAP } from "../../../_lib/gsap/base";
interface Props {
  openModalOf: string;
  children: React.ReactNode;
}
const OpenModalBtn = ({ openModalOf, children }: Props) => {
  const { contextSafe } = useGSAP();
  const handleModal = contextSafe(() => {
    callModal({ open: true, className: openModalOf });
  });
  return (
    <div onClick={() => handleModal()} className="btn btn__openModal">
      {children}
    </div>
  );
};

export default OpenModalBtn;
