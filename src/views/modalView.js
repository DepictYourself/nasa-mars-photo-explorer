import View from "./view";

class ModalView extends View {
  _parentElement = document.querySelector(".modal");

  open(data) {
    console.log("modalView open() data", data);
    const img = this._parentElement.querySelector(".modal__image");

    img.src = data.img_src;
    img.alt = `Mars photo taken by ${data.rover.name}`;

    this._parentElement.classList.remove("hidden");

    this._parentElement
      .querySelector(".modal__close")
      .addEventListener("click", this.close.bind(this));

    document.addEventListener("keydown", this._handleEscape);
  }

  close() {
    this._parentElement.classList.add("hidden");
    document.removeEventListener("keydown", this._handleEscape);
  }

  _handleEscape = (e) => {
    if (e.key === "Escape") this.close();
  }

  generateMarkdown() {
    return;
  }
}

export default new ModalView();