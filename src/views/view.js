export default class View {
  _data;

  _clear() {
    this._parentElement.innerHTML = "";
  }

  /**
   * 
   * @param {*} data state data required by "component"
   */
  render(data) {
    this._data = data;
    const markup = this.generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderLoading() {
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', "<p>Loading...</p>");
  }


}