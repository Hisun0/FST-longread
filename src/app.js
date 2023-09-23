const showOnScroll = (wt) => {
  const firstContainer = document.querySelector(".bg-cian");

  const wh = document.body.clientHeight;
  const eh = firstContainer.offsetHeight;
  const et = firstContainer.offsetTop;
  console.log(`${wt + wh} > ${et + eh - 100}`);
  if (wt + wh > et + eh - 120) return true;
  return false;
};

export default () => {
  window.addEventListener("scroll", (event) => {
    const scrollPosition = window.scrollY;
    const positionEl = document.querySelector(".position");
    const mapImage = document.querySelector(".map-photo");
    const logo = document.querySelector(".logo-wrapper");
    const header = document.querySelector("header");

    const scale = (100 + scrollPosition / 5) / 100;
    if (scale <= 4) {
      positionEl.style.scale = `${scale}`;
      mapImage.style.filter = `blur(${scrollPosition / 1000}px)`;
    }
    if (scale > 4) {
      logo.style.opacity = `${scale - 4}`;
    } else {
      logo.style.opacity = 0;
    }
    if (showOnScroll(scrollPosition)) {
      header.classList.remove("header-hide");
    } else {
      header.classList.add("header-hide");
    }
  });
};
