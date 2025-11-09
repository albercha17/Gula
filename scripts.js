const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
  });
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Submenú de "Carta"
const navCartaToggle = document.getElementById("navCartaToggle");
const navCartaItem = navCartaToggle
  ? navCartaToggle.closest(".nav__item")
  : null;

if (navCartaToggle && navCartaItem) {
  navCartaToggle.addEventListener("click", () => {
    navCartaItem.classList.toggle("nav__item--open");
  });
}

// Slider de novedades
const sliderEl = document.querySelector("[data-slider]");

if (sliderEl) {
  const labelEl = sliderEl.querySelector("[data-slider-label]");
  const textEl = sliderEl.querySelector("[data-slider-text]");
  const prevBtn = sliderEl.querySelector("[data-slider-prev]");
  const nextBtn = sliderEl.querySelector("[data-slider-next]");

  const novedadesItems = [
    {
      label: "Nuevo horario",
      text: "Viernes y sábado alargamos la noche. Revisa siempre nuestras stories para ver si hay fiesta extra."
    },
    {
      label: "Burger invitada",
      text: "De vez en cuando entra una burger fuera de carta solo por unos días. Si la ves, pídetela."
    },
    {
      label: "Eventos",
      text: "Hay noches con música, partidos y movidas especiales. Pregunta en barra qué se cuece esta semana."
    },
    {
      label: "Cambios en carta",
      text: "Probamos cosas nuevas y rotamos platos. Lo que hoy está, mañana igual desaparece. Vive al límite."
    }
  ];

  let sliderIndex = 0;

  const renderSliderItem = () => {
    const current = novedadesItems[sliderIndex];
    if (labelEl) labelEl.textContent = current.label;
    if (textEl) textEl.textContent = current.text;
  };

  renderSliderItem();

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      sliderIndex = (sliderIndex - 1 + novedadesItems.length) % novedadesItems.length;
      renderSliderItem();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      sliderIndex = (sliderIndex + 1) % novedadesItems.length;
      renderSliderItem();
    });
  }
}
