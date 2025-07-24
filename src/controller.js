import * as model from './model';
import galeryView from './views/galeryView';
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
    galeryView.renderLoading();
    const filters = headerView.getFilters();
  } catch (error) {
    console.log(error);
  }
}

export const init = function() {
  mainView.AddEventHandler(controlMain);
  headerView.AddEventHandler(controlImageGalery);
}

