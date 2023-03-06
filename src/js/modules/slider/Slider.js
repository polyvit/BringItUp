export default class Slider {
  constructor({
    container = null,
    buttons = null,
    next = null,
    prev = null,
    activeClass = "",
    animate = false,
    autoplay = false,
  } = {}) {
    this.container = document.querySelector(container);
    try {
      this.slides = this.container.children;
    } catch (e) {}
    this.buttons = document.querySelectorAll(buttons);
    this.slideIndex = 1;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
  }
}
