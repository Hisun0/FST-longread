// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger.js";
// import LocomotiveScroll from "locomotive-scroll";
//
// export default () => {
//   function locomotive() {
//     gsap.registerPlugin(ScrollTrigger);
//
//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector("#main"),
//       smooth: true,
//     });
//     locoScroll.on("scroll", ScrollTrigger.update);
//
//     ScrollTrigger.scrollerProxy("#main", {
//       scrollTop(value) {
//         return arguments.length
//           ? locoScroll.scrollTo(value, 0, 0)
//           : locoScroll.scroll.instance.scroll.y;
//       },
//
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//
//       pinType: document.querySelector("#main").style.transform
//         ? "transform"
//         : "fixed",
//     });
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();
//   }
//   locomotive();
//
//   const canvas = document.querySelector("canvas");
//   const context = canvas.getContext("2d");
//
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//
//   window.addEventListener("resize", function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     render();
//   });
//
//   const generateFilePaths = (directory, fileNamePrefix, filesCount) => {
//     const filePaths = [];
//
//     for (let i = 0; i < filesCount; i += 1) {
//       const fileNumber = String(i).padStart(6, "0");
//       const pathToFile = `./__fixtures__/${directory}/${fileNamePrefix}-${fileNumber}.png`;
//       filePaths.push(pathToFile);
//     }
//
//     return filePaths;
//   };
//
//   const files = (index) =>
//     generateFilePaths("earth-animation", "earth", 600)[index];
//
//   const frameCount = 600;
//
//   const images = [];
//   const imageSeq = {
//     frame: 1,
//   };
//
//   for (let i = 0; i < frameCount; i++) {
//     const img = new Image();
//     img.src = files(i);
//     images.push(img);
//   }
//
//   gsap.to(imageSeq, {
//     frame: frameCount - 1,
//     snap: "frame",
//     ease: `none`,
//     scrollTrigger: {
//       scrub: 0.15,
//       trigger: `#page>canvas`,
//       start: `top top`,
//       end: `600% top`,
//       scroller: `#main`,
//     },
//     onUpdate: render,
//   });
//
//   images[1].onload = render;
//
//   function render() {
//     scaleImage(images[imageSeq.frame], context);
//   }
//
//   function scaleImage(img, ctx) {
//     var canvas = ctx.canvas;
//     var hRatio = canvas.width / img.width;
//     var vRatio = canvas.height / img.height;
//     var ratio = Math.max(hRatio, vRatio);
//     var centerShift_x = (canvas.width - img.width * ratio) / 2;
//     var centerShift_y = (canvas.height - img.height * ratio) / 2;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(
//       img,
//       0,
//       0,
//       img.width,
//       img.height,
//       centerShift_x,
//       centerShift_y,
//       img.width * ratio,
//       img.height * ratio
//     );
//   }
//   ScrollTrigger.create({
//     trigger: "#page>canvas",
//     pin: true,
//     // markers:true,
//     scroller: `#main`,
//     start: `top top`,
//     end: `600% top`,
//   });
//
//   gsap.to("#page1", {
//     scrollTrigger: {
//       trigger: `#page1`,
//       start: `top top`,
//       end: `bottom top`,
//       pin: true,
//       scroller: `#main`,
//     },
//   });
//   gsap.to("#page2", {
//     scrollTrigger: {
//       trigger: `#page2`,
//       start: `top top`,
//       end: `bottom top`,
//       pin: true,
//       scroller: `#main`,
//     },
//   });
// };

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
};
