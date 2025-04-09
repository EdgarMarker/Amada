import React, { useRef } from "react";
import { AnimationManager, ScrollSmoother, useGSAP } from "./animation-manager";

interface Props {
  children: React.ReactNode;
}

const ScrollSmootherProvider = ({ children }: Props) => {
  const wrapper = useRef(null);
  const content = useRef(null);

  useGSAP(
    () => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      if (isDesktop) {
        ScrollSmoother.create({
          wrapper: wrapper.current,
          content: content.current,
          smooth: 1,
          effects: true,
          ignoreMobileResize: true,
          normalizeScroll: false,
        });
      }
      AnimationManager.animateHeader();
      AnimationManager.initBatchAnimations();
      AnimationManager.initFrase();
      AnimationManager.animateDivisor();
    },
    { scope: wrapper }
  );

  return (
    <div ref={wrapper} className="smooth-wrapper">
      <div ref={content} className="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default ScrollSmootherProvider;
