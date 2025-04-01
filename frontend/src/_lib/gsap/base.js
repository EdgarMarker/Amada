import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export {ScrollTrigger, useGSAP, gsap, ScrollSmoother };

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother, useGSAP);

if (typeof window !== "undefined" && window.innerWidth < 1024) {
  window.addEventListener(
    "scroll",
    () => {
      ScrollTrigger.update();
    },
    { passive: true }
  );
}

export const scrollTo = ({ idToScroll, classToScroll }) => {
  let selector = idToScroll ? `#${idToScroll}` : `.${classToScroll}`;
  gsap.to(window, {
    duration: 1,
    scrollTo: selector,
  });
};

export const scrollSmoother = () => {
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  if (isDesktop) {
    if (!ScrollSmoother.get()) {
      ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
        ignoreMobileResize: true,
      });
      window.smoother = smoother;
      ScrollTrigger.refresh();
    }
  } else {
    const smoother = ScrollSmoother.get();
    if (smoother) smoother.kill();

    const wrapper = document.getElementById("smooth-wrapper");
    const content = document.getElementById("smooth-content");
    if (wrapper) {
      wrapper.style.overflow = "auto";
      wrapper.style.position = "relative";
    }
    if (content) {
      content.style.transform = "none";
      content.style.willChange = "auto";
      content.style.width = "100%";
      content.style.position = "relative";
    }

    ScrollTrigger.refresh(true);
  }
};

export const telonUp = () => {
  const telon = document.getElementById("telon");
  gsap.to(telon, {
    scaleY: 0,
    delay: 1,
    duration: 0.5,
  });
};

export const menuMobile = () => {
  const check = document.getElementById("mobile__trigger");
  const menu = document.getElementById("mobile__menu");
  const bgActive = document.getElementById("mobile__active");
  const both = [check, bgActive];
  both.forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      check.classList.toggle("active");
      menu.classList.toggle("show");
      bgActive.classList.toggle("show");
    });
  });
};

export const callMenu = ({ open }) => {
  const navActive = document.querySelector(".mobileActive");
  const navBase = document.querySelector(".btn__trigger");
  const equis = document.querySelector(".equis");
  const tl = gsap.timeline();
  tl.to(navBase, {
    display: open ? "none" : "flex",
    top: open ? "-100%" : "0%",
    duration: 0,
  });
  tl.to(navActive, {
    display: open ? "flex" : "none",
    right: open ? "0%" : "-100%",
    duration: 1,
  });
  tl.to(equis, {
    display: open ? "flex" : "none",
    right: open ? "0%" : "-100%",
    duration: 0,
  });
};

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

export const batch = () => {
  const Stagger = 0.1;

  const h2Elements = document.querySelectorAll(".fadeInOut h2");
  const h3Elements = document.querySelectorAll(".fadeInOut h3");
  const pElements = document.querySelectorAll(".fadeInOut p");
  const imgElements = document.querySelectorAll(".fadeInOut img");

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const isMobile = window.matchMedia("(max-width: 1023px)").matches;

  if (isDesktop) {
    if (h2Elements.length) gsap.set(h2Elements, { opacity: 0, y: 50 });
    if (h3Elements.length) gsap.set(h3Elements, { opacity: 0, y: 50 });
    if (pElements.length) gsap.set(pElements, { opacity: 0, y: 50 });
    if (imgElements.length) gsap.set(imgElements, { opacity: 0, y: 50 });

    ScrollTrigger.batch(
      [".fadeInOut h3", ".fadeInOut h2", ".fadeInOut p", ".fadeInOut img"],
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
  } else if (isMobile) {
    return;
  }
};

export const batchCard = () => {
  const Stagger = 0.1;
  const card__bases = document.querySelectorAll(".card__bases");
  if (card__bases.length) gsap.set(card__bases, { y: 100, opacity: 0 });

  ScrollTrigger.batch(card__bases, {
    start: "top 90%",
    end: "bottom top",
    onEnter: (batch) => {
      gsap.to(batch, {
        y: 0,
        opacity: 1,
        stagger: Stagger,
        overwrite: true,
      });
    },
    onLeave: (batch) => {
      gsap.to(batch, {
        y: 100,
        opacity: 0,
        stagger: Stagger,
        overwrite: true,
      });
    },
    onEnterBack: (batch) => {
      gsap.to(batch, {
        y: 0,
        opacity: 1,
        stagger: Stagger,
        overwrite: true,
      });
    },
    onLeaveBack: (batch) => {
      gsap.to(batch, {
        y: 100,
        opacity: 0,
        stagger: Stagger,
        overwrite: true,
      });
    },
  });
};

export const formAnim = () => {
  const Stagger = 0.1;
  const form = document.getElementById("hubspotForm");
  gsap.set(form, { y: 100, opacity: 0 });

  ScrollTrigger.batch(form, {
    start: "top 90%",
    end: "bottom top",
    onEnter: (batch) => {
      gsap.to(batch, {
        y: 0,
        opacity: 1,
        stagger: Stagger,
        overwrite: true,
      });
    },
    onLeave: (batch) => {
      gsap.to(batch, {
        y: 100,
        opacity: 0,
        stagger: Stagger,
        overwrite: true,
      });
    },
    onEnterBack: (batch) => {
      gsap.to(batch, {
        y: 0,
        opacity: 1,
        stagger: Stagger,
        overwrite: true,
      });
    },
    onLeaveBack: (batch) => {
      gsap.to(batch, {
        y: 100,
        opacity: 0,
        stagger: Stagger,
        overwrite: true,
      });
    },
  });
};
