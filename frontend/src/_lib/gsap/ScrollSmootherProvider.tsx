import React, { useEffect, useRef } from "react";
import { AnimationManager, useGSAP } from "./animation-manager";

interface Props {
  children: React.ReactNode;
}
const ScrollSmootherProvider = ({ children }: Props) => {
  const wrapper = useRef(null);
  const isInitialized = useRef(false);

  useGSAP(
    () => {
      AnimationManager.initScrollSmoother();
    },
    { scope: wrapper }
  );
  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default ScrollSmootherProvider;
