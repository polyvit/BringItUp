import Slider from "./modules/Slider";
import Videoplayer from "./modules/Videoplayer";

window.addEventListener("DOMContentLoaded", () => {
  const slider1 = new Slider(".page", ".next");
  slider1.render();
  const videoplayer = new Videoplayer(".showup .play", ".overlay");
  videoplayer.init();
});
