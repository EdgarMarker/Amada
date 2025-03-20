import React, { useRef } from "react";
import { AnimationManager, useGSAP } from "./animation-manager";
interface Props {
  children: React.ReactNode;
}
const GsapContext = ({ children }: Props) => {
  const wrapper = useRef(null);
  useGSAP(
    () => {
      AnimationManager.animateHeader();
      AnimationManager.initBatchAnimations();
    },
    { scope: wrapper }
  );
  return <div ref={wrapper}>{children}</div>;
};

export default GsapContext;
