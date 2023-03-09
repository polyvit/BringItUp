export default class Accordion {
  constructor(pSel) {
    this.questions = document.querySelectorAll(pSel);
  }
  init() {
    this.questions.forEach((btn) => {
      btn.addEventListener("click", function () {
        console.log("click1");
        const sibling = btn.closest(".module__info-show").nextElementSibling;
        sibling.classList.toggle("msg");
        sibling.style.marginTop = "20px";
      });
    });
  }
}
