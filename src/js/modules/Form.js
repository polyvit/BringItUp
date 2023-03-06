export default class Form {
  constructor(formSel) {
    this.forms = document.querySelectorAll(formSel);
    this.message = {
      loading: "Идет загрузка",
      error: "Что-то пошло не так",
      success: "Спасибо, менеджер скоро свяжется с вами",
    };
    this.path = "assets/question.php";
    this.inputs = document.querySelectorAll("input");
  }
  async postData(url, data) {
    let result = await fetch(url, {
      method: "POST",
      body: data,
    });
    if (!result.ok) {
      throw new Error(`Could not fetch ${url}`);
    }
    return await result.text();
  }
  clearInputs() {
    this.inputs.forEach((input) => {
      input.value = "";
    });
  }
  checkMailInputs() {
    const mailInputs = document.querySelectorAll("[type='email']");
    mailInputs.forEach((input) => {
      input.addEventListener("keypress", (e) => {
        if (e.key.match(/[^a-z 0-9 @ _ \.]/gi)) {
          e.preventDefault();
        }
      });
    });
  }
  initMask() {
    let setCursorPosition = (pos, elem) => {
      elem.focus();
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    };

    function createMask(event) {
      let matrix = "+1 (___) ___-____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");

      if (def.length >= val.length) {
        val = def;
      } // Запрет на удаление кода страны

      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ""
          : a;
      });

      if (event.type === "blur") {
        if (this.value.length == 2) {
          this.value = "";
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }

    let inputs = document.querySelectorAll("[name='phone']");
    inputs.forEach((input) => {
      input.addEventListener("input", createMask);
      input.addEventListener("focus", createMask);
      input.addEventListener("blur", createMask);
    });
  }
  init() {
    console.log("it works 5");
    this.checkMailInputs();
    this.initMask();
    this.forms.forEach((f) => {
      f.addEventListener("submit", (e) => {
        e.preventDefault();
        let statusElement = document.createElement("div");
        statusElement.style.cssText = `
          margin-top: 15px;
          font-size: 18px;
          color: black;
        `;
        f.parentNode.appendChild(statusElement);
        statusElement.textContent = this.message.loading;
        const formData = new FormData(f);
        console.log(formData);
        this.postData(this.path, formData)
          .then((res) => {
            console.log(res);
            statusElement.textContent = this.message.success;
          })
          .catch(() => {
            statusElement.textContent = this.message.error;
          })
          .finally(() => {
            this.clearInputs();
            setTimeout(() => statusElement.remove(), 6000);
          });
      });
    });
  }
}
