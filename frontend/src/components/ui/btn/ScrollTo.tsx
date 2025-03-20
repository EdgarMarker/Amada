import React from "react";
import { scrollTo, useGSAP } from "../../../_lib/gsap/base";

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
    scrollTo({ idToScroll, classToScroll });
  });
  return (
    <div className={`btn ${className}`} onClick={() => handleScrollTo()}>
      {children}
    </div>
  );
};

export default ScrollTo;
