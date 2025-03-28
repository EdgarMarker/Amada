import React, { useRef } from "react";
import { AnimationManager, useGSAP } from "./animation-manager";

interface Props {
  children: React.ReactNode;
}
const ScrollSmootherProvider = ({ children }: Props) => {
  const wrapper = useRef(null);
  const isInitialized = useRef(false);

  useGSAP(() => {
      AnimationManager.initScrollSmoother();

      setTimeout(() => {
        AnimationManager.animateHeader();
        AnimationManager.initFrase();
        AnimationManager.initBatchAnimations();
        AnimationManager.animateDivisor();
        AnimationManager.initHeroFrase();
        AnimationManager.animateSvgText();
        // ¡Importante! Refrescar GSAP
        AnimationManager.refresh();
      }, 500);

      setTimeout(() => {
        AnimationManager.refresh();
      }, 5000);

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