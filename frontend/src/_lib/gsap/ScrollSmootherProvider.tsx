import React, { useRef } from "react";
import { ScrollSmoother, gsap, useGSAP } from "./animation-manager";

interface Props {
  children: React.ReactNode;
}

const ScrollSmootherProvider = ({ children }: Props) => {
  const wrapper = useRef(null);
  const content = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollSmoother);

    // Crear ScrollSmoother solo en desktop
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const smoothValue = isDesktop ? 1 : 0.01;
    ScrollSmoother.create({
      wrapper: wrapper.current,
      content: content.current,
      smooth: smoothValue,
      effects: true,
    });
  }, []);

  return (
    <div ref={wrapper} className="smooth-wrapper">
      <div ref={content} className="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default ScrollSmootherProvider;
