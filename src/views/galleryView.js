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
            <img id=${pic.id} src="${pic.img_src}" alt="Mars photo taken by ${pic.rover.name}">
            <figcaption>
              <strong>${pic.rover.name}</strong> | ${pic.camera.full_name}
              <small>${pic.earth_date}</small>
            </figcaption>
          </figure>
        `).join('')}
      `
    return markup;
  }

  addEventHandler(handler) {
    const galleryImages = document.querySelectorAll('.gallery__item img');
    console.log("galleryView -> addEventHandler() ", galleryImages);
    galleryImages.forEach(img => {
      img.addEventListener("click", handler);
    })
  }
}

export default new GalleryView();