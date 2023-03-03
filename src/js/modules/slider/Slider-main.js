import Slider from "./Slider";

export default class MainSlider extends Slider {
  constructor(buttons) {
    super(buttons);
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    this.slides.forEach((slide) => {
      slide.style.display = "none";
    });
    this.slides[this.slideIndex - 1].style.display = "block";
  }
  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
    if (this.slideIndex == 3) {
      document.querySelector(".hanson").style.opacity = "0";
      setTimeout(() => {
        document.querySelector(".hanson").style.opacity = "1";
        document.querySelector(".hanson").classList.add("slideInUp");
      }, 3000);
    }
  }
  render() {
    this.buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.plusSlides(1);
      });
      btn.parentNode.previousElementSibling.addEventListener("click", (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
    this.showSlides(this.slideIndex);
  }
}
