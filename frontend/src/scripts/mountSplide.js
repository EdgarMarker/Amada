import Splide from "@splidejs/splide";

function initializeSplide() {
  // Verifica si el elemento #splide-testy existe
  const splideSustainabilityElement = document.querySelector("#splide-sustainability");
  if (splideSustainabilityElement) {
    // Verifica el tamaño de la pantalla
    const getPerPage = () => {
      if (window.innerWidth <= 768) {
        // Tamaño para móvil
        return 1;
      } else if (window.innerWidth <= 1024) {
        // Tamaño para iPad
        return 2;
      } else {
        return 3; // Tamaño para pantallas más grandes
      }
    };

    const splideSustainability = new Splide(splideSustainabilityElement, {
      perPage: getPerPage(),
      gap: "10px",
      pagination: false
    });

    splideSustainability.mount();

    // calcular perPage cuando el tamaño de la pantalla cambia (en caso de cambio de tamaño)
    window.addEventListener("resize", () => {
      splideSustainability.options.perPage = getPerPage();
      splideSustainability.refresh(); // Actualiza la configuración de Splide
    });
  }

  // Verifica si el elemento #splide-testy existe
  const splideTestyElement = document.querySelector("#splide-testy");
  if (splideTestyElement) {
    // Verifica el tamaño de la pantalla
    const getPerPage = () => {
      if (window.innerWidth <= 768) {
        // Tamaño para móvil
        return 1;
      } else if (window.innerWidth <= 1024) {
        // Tamaño para iPad
        return 2;
      } else {
        return 3; // Tamaño para pantallas más grandes
      }
    };

    const splideTesty = new Splide(splideTestyElement, {
      perPage: getPerPage(),
      gap: "10px",
      pagination: false,
    });

    splideTesty.mount();

    // calcular perPage cuando el tamaño de la pantalla cambia (en caso de cambio de tamaño)
    window.addEventListener("resize", () => {
      splideTesty.options.perPage = getPerPage();
      splideTesty.refresh(); // Actualiza la configuración de Splide
    });
  }

  // Verifica si el elemento .splide-models existe
  const splideModelsElement = document.querySelector(".splide-models");
  if (splideModelsElement) {
    const splideModels = new Splide(splideModelsElement, {
      perPage: 1,
      gap: "10px",
      arrows: false,
      pagination: false,
      drag: false,
      classes: {
        pagination: "splide__pagination__tabs",
        page: "splide__pagination__tab",
      },
    });
    splideModels.mount();

    // Agrega eventos a los botones de paginación
    document
      .querySelectorAll(".splide__pagination__tab")
      .forEach((button, idx) => {
        button.addEventListener("click", () => {
          splideModels.go(idx);
        });
      });

    // Guarda la instancia en window para evitar doble inicialización
    window.splideModels = splideModels;
  }

  // Inicializa las galerías de modelos
  const splideModelsGallery = document.querySelectorAll(
    ".splide-models--gallery"
  );
  splideModelsGallery.forEach((splideElement) => {
    const splideGallery = new Splide(splideElement, {
      perPage: 1,
      gap: "10px",
      arrows: true,
      pagination: false,
      rewind: true,
    });
    splideGallery.mount();
  });
}

// Ejecuta initializeSplide cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", initializeSplide);

// Ejecuta initializeSplide después de un cambio de página (SPA-like navigation)
document.addEventListener("astro:after-swap", initializeSplide);

//*test
const splideTest = () => {
  const modal = document.getElementById("modalGallery");
  const modalClose = document.getElementById("modalGalleryClose");
  const galeriaItems = document.querySelectorAll(".galeria-item");
  let splideInstance = null;

  // Inicializar el carrusel Splide
  const initSplide = () => {
    if (splideInstance) {
      splideInstance.destroy();
    }

    splideInstance = new Splide("#imageSlider", {
      type: "slide",
      perPage: 1,
      perMove: 1,
      gap: "1rem",
      pagination: true,
      arrows: true,
      lazyLoad: "nearby",
    }).mount();
  };

  // Eventos para mostrar el modal con la imagen seleccionada
  galeriaItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      modal.classList.add("active");

      // Inicializar Splide solo cuando se abre el modal
      initSplide();

      // Mover el carrusel a la imagen seleccionada
      splideInstance.go(index);

      // Prevenir el scroll del body
      document.body.style.overflow = "hidden";
    });
  });

  // Cerrar el modal
  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // Cerrar también cuando se haga clic fuera de la imagen
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

  // Eventos de teclado para navegación
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;

    if (e.key === "Escape") {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    } else if (e.key === "ArrowRight" && splideInstance) {
      splideInstance.go("+1");
    } else if (e.key === "ArrowLeft" && splideInstance) {
      splideInstance.go("-1");
    }
  });
};

document.addEventListener("DOMContentLoaded", () => splideTest());
document.addEventListener("astro:after-preparation", () => splideTest());
document.addEventListener("astro:after-swap", () => splideTest());
document.addEventListener("astro:after-preparation", () => splideTest());








