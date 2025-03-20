// animation-manager.js
import { gsap } from "gsap";

// Importación de ScrollTrigger como CommonJS
import pkgScrollTrigger from 'gsap/ScrollTrigger.js';
const { ScrollTrigger } = pkgScrollTrigger;

// Importación de ScrollSmoother como CommonJS
import pkgScrollSmoother from 'gsap/ScrollSmoother.js';
const { ScrollSmoother } = pkgScrollSmoother;

// Importación de ScrollToPlugin como CommonJS
import pkgScrollToPlugin from 'gsap/ScrollToPlugin.js';
const { ScrollToPlugin } = pkgScrollToPlugin;

// Importar useGSAP directamente (ES Module)
import { useGSAP } from "@gsap/react";  // Sin "default"

// Registrar plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother, useGSAP);


//Exportar useGSAP

export { useGSAP };

// Objeto central para gestionar animaciones
export const AnimationManager = {
  // Almacena animaciones registradas
  animations: {},

  // Inicializa solo ScrollSmoother
  initScrollSmoother() {
    if (this.smoother) return; // Evitar múltiples inicializaciones

    let mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      this.smoother = ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
        onUpdate: () => {
          document.dispatchEvent(new CustomEvent("smoother-update"));
        },
      });
    });
  },

  // Inicializa animaciones batch para elementos con clases específicas
  initBatchAnimations() {
    const stagger = 0.1;

    // Seleccionar elementos para animaciones
    const elements = {
      h2: document.querySelectorAll(".fadeInOut h2"),
      h3: document.querySelectorAll(".fadeInOut h3"),
      p: document.querySelectorAll(".fadeInOut p"),
      img: document.querySelectorAll(".fadeInOut img.img"),
    };

    // Configurar estado inicial
    if (elements.h2.length) gsap.set(elements.h2, { opacity: 0, x: -50 });
    if (elements.h3.length) gsap.set(elements.h3, { opacity: 0, x: -50 });
    if (elements.p.length) gsap.set(elements.p, { opacity: 0, y: 50 });
    if (elements.img.length) gsap.set(elements.img, { opacity: 0, y: 50 });

    // Crear batch ScrollTrigger
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
            stagger: stagger,
            overwrite: true,
            force3D: true,
          }),
        onLeave: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            x: 0,
            stagger: stagger,
            overwrite: true,
            force3D: true,
          }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            x: 0,
            stagger: stagger,
            overwrite: true,
            force3D: true,
          }),
        onLeaveBack: (batch) =>
          gsap.to(batch, {
            opacity: 0,
            y: 50,
            stagger: stagger,
            overwrite: true,
            force3D: true,
          }),
      }
    );
  },

  // Método para scrollear a un elemento
  scrollTo({ idToScroll, classToScroll, duration = 1 }) {
    let selector = idToScroll ? `#${idToScroll}` : `.${classToScroll}`;

    gsap.to(window, {
      duration,
      scrollTo: selector,
      ease: "power2.inOut",
    });
  },

  // Método para mostrar/ocultar menú móvil
  toggleMenu({ open }) {
    const navActive = document.querySelector("nav.mobileActive");
    const navBase = document.querySelector("nav.mobile");

    if (!navActive || !navBase) return;

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
  },

  // Método para mostrar/ocultar modal
  toggleModal({ open, className }) {
    const modal = document.querySelector(className);

    if (!modal) return;

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
  },

  // Animación de cabecera
  animateHeader() {
    const header = document.getElementById("header");
    const intro = document.querySelector(".intro");

    if (!header || !intro) return;

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
  },

  // Animación de escala para divisores
  animateDivisor(element) {
    if (!element) return;

    const imgDivisor = element.querySelector(".imgDivisor");

    if (!imgDivisor) return;

    gsap.from(imgDivisor, {
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        force3D: true,
      },
      scale: 0.9,
      transformOrigin: "bottom center",
      duration: 1.5,
      ease: "power2.inOut",
    });
  },

  // Animación de texto SVG
  animateSvgText(element) {
    if (!element) return;

    const svgTextBottom = element.querySelector(".svgTextBottom");
    const svgTextTop = element.querySelector(".svgTextTop");

    if (svgTextBottom) {
      gsap.from(svgTextBottom, {
        scrollTrigger: {
          trigger: svgTextBottom,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          force3D: true,
        },
        x: "-150%",
        ease: "power1.inOut",
        duration: 1,
      });
    }

    if (svgTextTop) {
      gsap.from(svgTextTop, {
        scrollTrigger: {
          trigger: svgTextTop,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          force3D: true,
        },
        x: "150%",
        ease: "power1.inOut",
        duration: 1,
      });
    }
  },

  // Animación de héroe
  animateHero() {
    const heroH2 = document.getElementById("heroH2");

    if (!heroH2) return;

    ScrollTrigger.create({
      trigger: heroH2,
      start: "center center",
      end: "+=200",
      pin: true,
      pinSpacing: false,
      onEnter: () => {
        gsap.to(heroH2, {
          mixBlendMode: "difference",
          color: "#fff",
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to(heroH2, {
          mixBlendMode: "normal",
          color: "inherit",
          duration: 0.5,
        });
      },
    });
  },

  // Refrescar todas las animaciones
  refresh() {
    // Refrescar ScrollTrigger
    ScrollTrigger.refresh(true);

    // Reinicializar si es necesario
    this.initBatchAnimations();

    // Refrescar ScrollSmoother si existe
    if (this.smoother) {
      this.smoother.refresh();
    }
  },
};
