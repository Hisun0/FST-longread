import gsap from "gsap";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const select = {
  journalist: {
    header: "Журналистика",
    content:
      "Программа направлена на подготовку медиаменеджеров нового поколения, обладающих навыками эффективного управления большими информационными потоками, владеющих современными коммуникативными технологиями, готовых к работе на глобальном медийном рынке.",
  },
  marketing: {
    header: "Реклама и связи с общественностью",
    content:
      "Подготовка эрудированного специалиста по рекламе и связям с общественностью, обладающего широким спектром знаний от экономики до психологии, коммуникабельного, с хорошим развитым вкусом, знающего тренды новейших технологий аудиовизуальной коммуникации.",
  },
  sociology: {
    header: "Социология",
    content:
      "Практикоориентированная программа, направленная на изучение и практическое освоение современных социологических  методов и технологий в изучении социальных проблем общества",
  },
  psychology: {
    header: "Психология",
    content:
      "Подготовка высококвалифицированных психологов для практической, научно-исследовательской, педагогической и организационно-управленческой деятельности в сфере управления образованием, здравоохранением, культурой, спортом, социальной помощью населению, а также в политических, коммерческих и консалтинговых организациях.",
  },
};

export default () => {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    spaceBetween: 30,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    mousewheel: true,
    keyboard: true,
  });

  const hero1 = document.querySelector("#hero-1");
  const hero2 = document.querySelector("#hero-2");

  gsap.from(hero1, { x: -100, duration: 1 });
  gsap.from(hero2, { x: 100, duration: 1 });

  const svgs = document.querySelectorAll("[data-select] > svg");
  const selectButtons = document.querySelectorAll("[data-select]");
  selectButtons.forEach((selectButton) => {
    selectButton.addEventListener("mouseover", () => {
      gsap.to(selectButton, { scale: 1.1 });
    });

    selectButton.addEventListener("mouseleave", () => {
      gsap.to(selectButton, { scale: 1 });
    });

    selectButton.addEventListener("click", () => {
      svgs.forEach((svgEl) => {
        svgEl.style.fill = "#cf4307";
      });

      selectButtons.forEach((el) => {
        el.classList.replace("bg-accent", "bg-white");
      });

      const tl = gsap.timeline();
      tl.to(selectButton, { scale: 1.2, duration: 0.2 }).to(selectButton, {
        scale: 1.1,
        duration: 0.2,
      });
      const dataset = selectButton.dataset.select;
      const svg = document.querySelector(`#${dataset}-svg`);
      svg.style.fill = "#ffffff";
      selectButton.classList.replace("bg-white", "bg-accent");

      const selectHeader = document.querySelector("#select-header");
      const selectContent = document.querySelector("#select-content");

      selectHeader.textContent = select[dataset].header;
      selectContent.textContent = select[dataset].content;
    });
  });
};
