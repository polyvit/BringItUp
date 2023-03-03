export default class ShowDifference {
  constructor(columnLeft, columnRight, cards) {
    this.columnLeft = document.querySelector(columnLeft);
    this.columnRight = document.querySelector(columnRight);
    this.leftCards = this.columnLeft.querySelectorAll(cards);
    this.rightCards = this.columnRight.querySelectorAll(cards);
    this.leftCounter = 0;
    this.rightCounter = 0;
  }
  bindTriggers(container, items, counter) {
    container.querySelector(".plus").addEventListener("click", () => {
      if (counter !== items.length - 2) {
        items[counter].style.display = "flex";
        counter++;
      } else {
        items[counter].style.display = "flex";
        items[items.length - 1].remove();
      }
    });
  }
  hideCards(cards) {
    cards.forEach((card, i, arr) => {
      if (i !== arr.length - 1) {
        card.style.display = "none";
      }
    });
  }
  init() {
    this.hideCards(this.leftCards);
    this.hideCards(this.rightCards);
    this.bindTriggers(this.columnLeft, this.leftCards, this.leftCounter);
    this.bindTriggers(this.columnRight, this.rightCards, this.rightCounter);
  }
}
