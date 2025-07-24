import View from './view';

class HeaderView extends View {
  _parentElement = document.querySelector('.header__form');

  generateMarkup() {
    const today = new Date("2024-02-19").toISOString().split('T')[0]
    return `
      <div class="form-group">
        <span>Filter by Earth date</span>
        <div class="date__range">
          <label for="fromdate">from</label>
          <input id="fromdate" type="date" value="${today}">
          <label for="todate">to</label>
          <input id="todate" type="date" value="${today}">
        </div>
      </div>
      <div class="form-group">
        <label for="rovers">Choose mars rovers</label>
        <select id="rovers" multiple>
          ${this._data.options.rovers.map(rover =>
            `<option 
              value="${rover.toLowerCase()}"
              ${rover === "Curiosity" ? "selected" : ""}
            >
              ${rover}
            </option>`
          )}
        </select>
      </div>
      <div class="form-group">
        <label for="cameras">Choose rover cameras</label>
        <select id="cameras" multiple>
          ${this._data.options.cameras.map(cam => 
            `<option 
              value="${cam.toLowerCase()}"
              ${cam === "NAVCAM" ? "selected" : ""}
            >
              ${cam}
            </option>`
          )}
        </select>
      </div>
      <button class="btn form__btn">Search</button>
    `
  }

  getFilters() {
    const fromdate = this._parentElement.querySelector('#fromdate').value
    const todate = this._parentElement.querySelector('#todate').value;

    const roverSelections = Array.from(this._parentElement.querySelector('#rovers').selectedOptions);
    const selectedRovers = roverSelections.map(option => option.value);

    const cameraSelections = Array.from(this._parentElement.querySelector('#cameras').selectedOptions);
    const selectedCameras = cameraSelections.map(option => option.value);
    
    return {
      from: fromdate,
      to: todate,
      rovers: selectedRovers,
      cameras: selectedCameras
    }
  }

  AddEventHandler(handler) {
    this._parentElement.addEventListener('submit', function(e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new HeaderView();