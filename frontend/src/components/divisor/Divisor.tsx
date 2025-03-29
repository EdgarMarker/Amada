import React, { useEffect, useRef } from "react";
import OptimizedImage from "../ui/img/OptimizedImg";
import SvgText from "../ui/svgText/SvgText";
import { AnimationManager, useGSAP } from "../../_lib/gsap/animation-manager";

interface Props {
  dataMainImg: {
    media: {
      url: string;
    };
    alt: {
      altText: string;
    };
  };
  dataSvgText?:
    | {
        media?: {
          url?: string;
        };
        alt?: {
          altText?: string;
        };
      }
    | any;
  dataWatermark: string;
}
const Divisor = ({ dataMainImg, dataSvgText, dataWatermark }: Props) => {
  const wrapper = useRef(null);
  useGSAP(
    () => {
      if (wrapper.current) {
        AnimationManager.animateDivisor(wrapper.current);
      }
    },
    { scope: wrapper }
  );
  return (
    <section ref={wrapper} className="divisor">
      <div className="column__1">
        <div className="imageWatermarkBox imageWatermarkBox--top imgDivisor">
          <div className="watermark">{dataWatermark}</div>
            <OptimizedImage
              className="img"
              src={dataMainImg.media.url}
              alt={dataMainImg.alt.altText}
              desktopWidth={1200}
              tabletWidth={800}
              mobileWidth={400}
            />
        </div>
        {dataSvgText && (
          <SvgText className="svgTextBottom" dataImg={dataSvgText} />
        )}
      </div>
    </section>
  );
};

export default Divisor;
