// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import OptimizedImage from "../img/OptimizedImg";
const SplideSUS = ({ dataSlide, dataWatermark }) => {
  return (
    <div>
      <Splide
        aria-label="Imágenes de sección sustentable"
        options={{
          perPage: 3,
          gap: "1em",
          pagination: false,
        }}
      >
        {dataSlide.map((item) => (
          <SplideSlide>
            <div className="card card__sustainability">
              <div class="imageWatermarkBox">
                <div class="watermark">{dataWatermark}</div>
                <OptimizedImage
                  src={item.media.url}
                  alt={item.alt.altText}
                  desktopWidth={1200}
                  tabletWidth={800}
                  mobileWidth={400}
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SplideSUS;
