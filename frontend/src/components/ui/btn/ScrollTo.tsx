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
  const { contextSafe } = useGSAP();
  const handleScrollTo = contextSafe(() => {
    AnimationManager.scrollTo({ idToScroll, classToScroll });
  });
  return (
    <div className={`btn ${className}`} onClick={() => handleScrollTo()}>
      {children}
    </div>
  );
};

export default ScrollTo;
