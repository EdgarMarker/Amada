// animation-manager.js
import { gsap } from "gsap";
// Importación de ScrollTrigger como CommonJS
import pkgScrollTrigger from "gsap/ScrollTrigger.js";
const { ScrollTrigger } = pkgScrollTrigger;
// Importación de ScrollSmoother como CommonJS
import pkgScrollSmoother from "gsap/ScrollSmoother.js";
const { ScrollSmoother } = pkgScrollSmoother;
// Importación de ScrollToPlugin como CommonJS
import pkgScrollToPlugin from "gsap/ScrollToPlugin.js";
const { ScrollToPlugin } = pkgScrollToPlugin;
// Importación de useGSAP como CommonJS (si es necesario)
import pkgUseGSAP from "@gsap/react";
const { useGSAP } = pkgUseGSAP;
// Registrar plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother, useGSAP);

export { useGSAP, gsap };

//* ScrollTo
export const scrollTo = ({ idToScroll, classToScroll }) => {
  let selector = idToScroll ? `#${idToScroll}` : `.${classToScroll}`;

  gsap.to(window, {
    duration: 1,
    scrollTo: selector,
  });
};

//*ScrollSmoother
export const scrollSmoother = () => {
  let mm = gsap.matchMedia();
  mm.add("(min-width: 1024px)", () => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  });
};

//* calling header

export const callHeader = () => {
  const header = document.getElementById("header");
  const intro = document.querySelector(".intro");

  if (header && intro) {
    gsap.to(header, {
      duration: 1.5,
      top: "0px",
      ease: "power1.in",
      scrollTrigger: {
        trigger: intro,
        start: "top top",
        end: "100px top",
      },
    });
  } else {
    console.warn("Elementos no encontrados: header o .intro");
  }
};

//* calling menu
export const callMenu = ({ open }) => {
  const navActive = document.querySelector("nav.mobileActive");
  const navBase = document.querySelector("nav.mobile");
  const tl = gsap.timeline();
  tl.to(navBase, {
    display: open ? "none" : "flex",
    top: open ? "-100%" : "0%",
    duration: 1,
  });
  tl.to(navActive, {
    display: open ? "flex" : "none",
    right: open ? "0%" : "-100%",
    duration: 0.25,
  });
};

//* calling modal
export const callModal = ({ open, className }) => {
  const modal = document.querySelector(className);
  gsap.to(modal, {
    duration: 0.5,
    opacity: open ? 1 : 0,
    scale: open ? 1 : 0.9,
    onStart: () => {
      if (open) {
        modal.style.display = "flex";
        modal.style.pointerEvents = "auto";
      }
    },
    onComplete: () => {
      if (!open) {
        modal.style.display = "none";
        modal.style.pointerEvents = "none";
      }
    },
  });
};

//* All batch
export const batch = () => {
  const Stagger = 0.1;

  // Selección de elementos dentro de ".fadeInOut"
  const h2Elements = document.querySelectorAll(".fadeInOut  h2");
  const h3Elements = document.querySelectorAll(".fadeInOut  h3");
  const pElements = document.querySelectorAll(".fadeInOut  p");
  const imgElements = document.querySelectorAll(".fadeInOut img.img");

  // Condicional en caso de que existan
  if (h2Elements.length) gsap.set(h2Elements, { opacity: 0, x: -50 });
  if (h3Elements.length) gsap.set(h3Elements, { opacity: 0, x: -50 });
  if (pElements.length) gsap.set(pElements, { opacity: 0, y: 50 });
  if (imgElements.length) gsap.set(imgElements, { opacity: 0, y: 50 });

  ScrollTrigger.batch(
    [".fadeInOut h3", ".fadeInOut h2", ".fadeInOut p", ".fadeInOut img.img"],
    {
      start: "top 80%",
      end: "top 80%",
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          x: 0,
          stagger: Stagger,
          overwrite: true,
        }),
      onLeave: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          x: 0,
          stagger: Stagger,
          overwrite: true,
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          x: 0,
          stagger: Stagger,
          overwrite: true,
        }),
      onLeaveBack: (batch) =>
        gsap.to(batch, {
          opacity: 0,
          y: 50,
          stagger: Stagger,
          overwrite: true,
        }),
    }
  );
};

//* scale divisor
export const scaleDivisor = (scope) => {
  const imgDivisor = scope.querySelector(".imgDivisor");
  const triggerOptions = {
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
    force3D: true,
  };

  gsap.from(imgDivisor, {
    scrollTrigger: {
      trigger: scope,
      ...triggerOptions,
    },
    scale: 0.9,
    transformOrigin: "bottom center",
    duration: 1.5,
    ease: "power2.inOut",
  });
};

//* SVG TEXT leftRight
export const leftRight = (scope) => {
  const svgTextBottom = scope.querySelector(".svgTextBottom");
  const svgTextTop = scope.querySelector(".svgTextTop");

  const tl = gsap.timeline();
  const triggerOptions = {
    start: "top bottom",
    end: "bottom center",
    scrub: true,
    force3D: true,
    markers: true,
  };
  tl.from(svgTextBottom, {
    scrollTrigger: {
      trigger: svgTextBottom,
      ...triggerOptions,
    },
    x: "-150%",
    ease: "power1.inOut",
    duration: 1,
  });
  tl.from(svgTextTop, {
    scrollTrigger: {
      trigger: svgTextTop,
      ...triggerOptions,
    },
    x: "150%",
    ease: "power1.inOut",
    duration: 1,
  });
};
//* Hero animation

export const heroAnimation = () => {
  ScrollTrigger.create({
    trigger: "#heroH2",
    start: "center center",
    end: "+=200",
    pin: true,
    pinSpacing: false,
    pinSpacers: false,
    onEnter: () => {
      gsap.to("#heroH2", {
        mixBlendMode: "#fff",
        scrub: true,
      });
    },
  });
};
