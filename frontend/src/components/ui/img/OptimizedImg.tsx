import React from "react";
import { urlFor } from "../../../_data/page";

interface Props {
  className?: string;
  src: string; // URL base de la imagen (proporcionada por Sanity)
  alt: string;
  desktopWidth: number; // Ancho para desktop
  tabletWidth: number; // Ancho para tablet
  mobileWidth: number; // Ancho para móvil
}

const OptimizedImage = ({
  className,
  src,
  alt,
  desktopWidth,
  tabletWidth,
  mobileWidth,
}: Props) => {
  // Generar las URLs responsivas usando urlFor
  const desktopSrc = urlFor(src).width(desktopWidth).url();
  const tabletSrc = urlFor(src).width(tabletWidth).url();
  const mobileSrc = urlFor(src).width(mobileWidth).url();

  return (
    <picture>
      {/* Fuente para desktop */}
      <source
        media="(min-width: 1024px)"
        srcSet={desktopSrc}
        type="image/webp" // Cambia a "image/jpeg" si no usas webp
      />

      {/* Fuente para tablet */}
      <source
        media="(min-width: 600px)"
        srcSet={tabletSrc}
        type="image/webp" // Cambia a "image/jpeg" si no usas webp
      />

      {/* Fuente para móvil */}
      <source
        srcSet={mobileSrc}
        type="image/webp" // Cambia a "image/jpeg" si no usas webp
      />

      {/* Imagen de respaldo para navegadores que no soportan <picture> */}
      <img
        className={`${className}`}
        src={desktopSrc} // Usamos la versión de desktop como respaldo
        alt={alt}
        //loading="lazy"
        style={{ width: "100%", height: "auto" }}
      />
    </picture>
  );
};

export default OptimizedImage;
