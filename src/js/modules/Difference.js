export default class ShowDifference {
  constructor(column, cards) {
    this.column = document.querySelector(column);
    try {
      this.cards = this.column.querySelectorAll(cards);
    } catch (e) {}
    this.counter = 0;
  }
  bindTriggers() {
    this.column.querySelector(".plus").addEventListener("click", () => {
      if (this.counter !== this.cards.length - 2) {
        this.cards[this.counter].style.display = "flex";
        this.counter++;
      } else {
        this.cards[this.counter].style.display = "flex";
        this.cards[this.cards.length - 1].remove();
      }
    });
  }
  hideCards() {
    this.cards.forEach((card, i, arr) => {
      if (i !== arr.length - 1) {
        card.style.display = "none";
      }
    });
  }
  init() {
    try {
      this.hideCards();
      this.bindTriggers();
    } catch (e) {}
  }
}
