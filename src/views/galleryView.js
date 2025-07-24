import View from "./view";

class GalleryView extends View {
  _parentElement = document.querySelector('.gallery');

  generateMarkup() {
    if(!this._data?.pictures?.length) {
      return `
        <p class="gallery__empty">No pictures found for selected filters :'(</p>
      `
    }
    const markup = `
        ${this._data.pictures.map(pic => `
          <figure class="gallery__item">
            <img src="${pic.img_src}" alt="Mars photo taken by ${pic.rover.name}">
            <figcaption>
              <strong>${pic.rover.name}</strong> | ${pic.camera.full_name}
              <small>${pic.earth_date}</small>
            </figcaption>
          </figure>
        `).join('')}
      `
    console.log("galleryView markup: ", markup);
    return markup;
  }
}

export default new GalleryView();