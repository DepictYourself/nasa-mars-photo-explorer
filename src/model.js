import {API_KEY, API_URL} from './config';
import { getJSON } from './helpers';
import headerView from './views/headerView';

export const state = {
  main: {
    title: "",
  },
  filters: {
    from: "",
    to: "",
    options: {
      rovers: [
        "Curiosity",
        "Opportunity",
        "Spirit"
      ],
      cameras: [
        "FHAZ",
        "RHAZ",
        "NAVCAM"
      ]
    },
  }
}

export const loadPictures = async () => {
  try {

    const url = new URL(API_URL, )
    console.log(url.toString());
    const data = await getJSON()
  } catch(error) {
    console.log(error);
  }
}