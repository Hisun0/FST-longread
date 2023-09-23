export default () => {
  window.addEventListener("scroll", (event) => {
    const scrollPosition = window.scrollY;
    const positionEl = document.querySelector(".position");
    const mapImage = document.querySelector(".map-photo");
    const logo = document.querySelector(".logo-wrapper");

    const scale = (100 + scrollPosition / 5) / 100;
    if (scale <= 4) {
      positionEl.style.scale = `${scale}`;
      mapImage.style.filter = `blur(${scrollPosition / 1000}px)`;
    }
    if (scale > 4) {
      console.log(scale);
      logo.style.opacity = `${scale - 4}`;
    } else {
      logo.style.opacity = 0;
    }
  });
};
