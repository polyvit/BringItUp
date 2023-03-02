import MainSlider from "./modules/slider/Slider-main";
import Videoplayer from "./modules/Videoplayer";

window.addEventListener("DOMContentLoaded", () => {
  const mainSlider = new MainSlider({ page: ".page", buttons: ".next" });
  mainSlider.render();
  const videoplayer = new Videoplayer(".showup .play", ".overlay");
  videoplayer.init();
});
