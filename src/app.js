import gsap from "gsap";

export default () => {
  const dropdownButton = document.querySelector("#dropdown-button");
  dropdownButton.addEventListener("mouseover", () => {
    const dropdownMenu = document.querySelector("#dropdown-menu");
    dropdownMenu.classList.remove("hidden");
  });
  dropdownButton.addEventListener("mouseleave", () => {
    const dropdownMenu = document.querySelector("#dropdown-menu");
    dropdownMenu.classList.add("hidden");
  });

  const selectButtons = document.querySelectorAll("[data-select]");
  selectButtons.forEach((selectButton) => {
    selectButton.addEventListener("mouseover", () => {
      gsap.to(selectButton, { scale: 1.1 });
    });

    selectButton.addEventListener("mouseleave", () => {
      gsap.to(selectButton, { scale: 1 });
    });

    selectButton.addEventListener("click", () => {
      const tl = gsap.timeline();
      tl.to(selectButton, { scale: 1.2, duration: 0.2 }).to(selectButton, {
        scale: 1.1,
        duration: 0.2,
      });
    });
  });
};
