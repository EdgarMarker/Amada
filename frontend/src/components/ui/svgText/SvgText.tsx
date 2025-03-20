import React, { useEffect, useRef } from "react";
import OptimizedImage from "../img/OptimizedImg";
import type { Img } from "../../../_types/_globals";
import { AnimationManager, useGSAP} from "../../../_lib/gsap/animation-manager";

interface Props {
  dataImg: Img;
  className?: string;
}

const SvgText = ({ dataImg, className }: Props) => {
  const wrapper = useRef(null);
  useGSAP(
    () => {
      if (wrapper.current) {
        AnimationManager.animateSvgText(wrapper.current)
      }
    },
    { scope: wrapper }
  );
  return (
    <div ref={wrapper}>
      <div className={`${className}`}>
        <OptimizedImage
          src={dataImg.media.url}
          alt={dataImg.alt.altText}
          desktopWidth={1200}
          tabletWidth={800}
          mobileWidth={400}
        />
      </div>
    </div>
  );
};

export default SvgText;
