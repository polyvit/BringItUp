import MainSlider from "./modules/slider/Slider-main";
import MiniSlider from "./modules/slider/Slider-mini";
import Videoplayer from "./modules/Videoplayer";
import ShowDifference from "./modules/Difference";

window.addEventListener("DOMContentLoaded", () => {
  const mainSlider = new MainSlider({
    container: ".page",
    buttons: ".next",
  });
  console.log(mainSlider);
  mainSlider.render();
  const showUpSlider = new MiniSlider({
    container: ".showup__content-slider",
    prev: ".showup__prev",
    next: ".showup__next",
    activeClass: "card-active",
    animate: true,
  });
  showUpSlider.init();
  const modulesSlider = new MiniSlider({
    container: ".modules__content-slider",
    prev: ".modules__info-btns .slick-prev",
    next: ".modules__info-btns .slick-next",
    activeClass: "card-active",
    animate: true,
    autoplay: true,
  });
  modulesSlider.init();
  const feedSlider = new MiniSlider({
    container: ".feed__slider",
    prev: ".feed__slider .slick-prev",
    next: ".feed__slider .slick-next",
    activeClass: "card-active",
  });
  feedSlider.init();
  const videoplayer = new Videoplayer(".showup .play", ".overlay");
  videoplayer.init();
  const showDifference = new ShowDifference(
    ".officerold",
    ".officernew",
    ".officer__card-item"
  );
  showDifference.init();
});
