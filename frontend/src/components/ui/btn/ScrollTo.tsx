import React from "react";
import {
  AnimationManager,
  useGSAP,
} from "../../../_lib/gsap/animation-manager";

interface Props {
  children?: React.ReactNode;
  className?: string;
  idToScroll?: string;
  classToScroll?: string;
}
const ScrollTo = ({
  className,
  idToScroll,
  classToScroll,
  children,
}: Props) => {
  const ref = React.useRef(null);
  const { contextSafe } = useGSAP({scope: ref});

  const handleScrollTo = contextSafe(() => {
    if(!ref.current) return;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (isDesktop) {
      AnimationManager.scrollTo({ idToScroll, classToScroll });
      return;
    }
  
    const selector = idToScroll ? `#${idToScroll}` : `.${classToScroll}`;
    const element = document.querySelector(selector)
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    
  });
  return (
    <div
      className={`btn ${className}`}
      ref={ref}
      onClick={() => handleScrollTo()}
    >
      {children}
    </div>
  );
};

export default ScrollTo;
