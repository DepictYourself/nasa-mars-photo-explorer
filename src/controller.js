import * as model from './model';
import galleryView from './views/galleryView';
import headerView from './views/headerView';
import mainView from "./views/mainView";

const controlMain = function() {
  model.state.main.title = "Nasa Mars Photo Explorer";
  document.title = model.state.main.title;
  mainView.render(model.state.main);
  headerView.render(model.state.filters);
}

const controlImageGalery = async function() {
  try {
    galleryView.renderLoading();
    const filters = headerView.getFilters();
    await model.loadPictures(filters);
    galleryView.render(model.state.gallery);
  } catch (error) {
    console.log(error);
  }
}

export const init = function() {
  mainView.AddEventHandler(controlMain);
  headerView.AddEventHandler(controlImageGalery);
}

