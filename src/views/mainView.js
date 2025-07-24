import View from './view';

class MainView extends View {
  _parentElement = document.querySelector('.title');

  generateMarkup() {
    return `
      <h1 class="title"><img src="nasa.png" alt="Logo" class="logo">${this._data.title}</h1>
    `
  }

  AddEventHandler(handler) {
    this._parentElement.addEventListener('load', handler());
  }
}

export default new MainView();