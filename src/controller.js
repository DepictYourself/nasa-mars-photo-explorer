import * as model from './model';
import galleryView from './views/galleryView';
import headerView from './views/headerView';
import mainView from "./views/mainView";
import modalView from './views/modalView';

const controlMain = function() {
  model.state.main.title = "Nasa Mars Photo Explorer";
  document.title = model.state.main.title;
  mainView.render(model.state.main);
  headerView.render(model.state.filters);
}

const controlImageGallery = async function() {
  try {
    galleryView.renderLoading();
    const filters = headerView.getFilters();
    await model.loadPictures(filters);
    galleryView.render(model.state.gallery);
    galleryView.addEventHandler(controlModal);
  } catch (error) {
    console.log(error);
  }
}

const controlModal = function(event) {
  try {
    console.log("image clicked", event);
    const clickedImgId = event.target.attributes["id"].value 
    const data = model.state.gallery.pictures.find(
      pic => pic.id == clickedImgId
    );
    modalView.open(data);
  } catch (error) {
    console.log(error);
  }
}

export const init = function() {
  mainView.AddEventHandler(controlMain);
  headerView.AddEventHandler(controlImageGallery);
  galleryView.addEventHandler(controlModal)
}

