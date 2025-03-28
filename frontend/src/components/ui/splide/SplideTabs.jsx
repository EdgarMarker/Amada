import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React, { useEffect, useRef, useState } from "react";
import OptimizedImage from "../img/OptimizedImg";
import PortableTextCustom from "../portableText/PortableTextCustom";

const SplideTabs = ({ dataSplide }) => {
  const splideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (splideRef.current && splideRef.current.splide) {
      setActiveIndex(0);
    }
  }, []);
  // Función para mover el slider a una posición específica y actualizar el índice activo
  const goToSlide = (index) => {
    if (splideRef.current && splideRef.current.splide) {
      splideRef.current.splide.go(index);
      setActiveIndex(index); // Actualiza el índice del botón activo
    }
  };

  return (
    <div className="splide-tabs-container">
      <Splide
        ref={splideRef}
        hasTrack={false}
        options={{
          perPage: 1,
          pagination: false,
          arrows: false,
          type: 'fade',
        }}
      >
        <div
          className="splide__custom-buttons"
          style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
        >
          {dataSplide.map((item, index) => (
            <button
              key={index}
              className={`btn btn__tabs ${
                activeIndex === index ? "btn__tabs--active" : ""
              }`} // Se añade la clase 'active' al botón seleccionado
              onClick={() => goToSlide(index)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <SplideTrack>
          {dataSplide.map((item, index) => (
            <SplideSlide key={index}>
              <OptimizedImage
                src={item.img.media.url}
                alt={item.img.alt.altText}
                desktopWidth={1200}
                tabletWidth={800}
                mobileWidth={400}
              />
              <PortableTextCustom data={item.portableText} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default SplideTabs;
