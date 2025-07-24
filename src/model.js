import { API_KEY, API_URL } from './config';
import { getJSON } from './helpers';

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
  },
  gallery: {
    count: 0,
    pictures: []
  }
}

export const loadPictures = async function (filters) {
  try {
    const requests = [];
    if (!filters.rovers || !filters.cameras) return;

    const dates = getDateRange(filters.from, filters.to);
    const combinations = getCombinations(
      filters.rovers,
      filters.cameras,
      filters.from,
      filters.to
    );

    for (const {rover, camera, date} of combinations) {
      const url = new URL(
        `/mars-photos/api/v1/rovers/${rover}/photos`,
        API_URL);
      url.searchParams.append("earth_date", date);
      url.searchParams.append("camera", camera);
      url.searchParams.append("page", 1);
      url.searchParams.append("api_key", API_KEY);
      
      requests.push(getJSON(url.toString()))
    }
    
    const responses = await Promise.all(requests);
    const allPhotos = responses.flatMap(res => res.photos);

    state.gallery.count = allPhotos.length;
    state.gallery.pictures = allPhotos;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function getDateRange(fromStr, toStr) {
  const from = new Date(fromStr);
  const to = new Date(toStr);

  if (to < from) {
    throw new Error(`Date must be the same or after "from" date`);
  }

  const dates = [];
  let current = new Date(from);

  while (current <= to) {
    dates.push(current.toISOString().split('T')[0]);
    current.setDate(current.getDate() + 1);
  }

  return dates;
}

function getCombinations(rovers, cameras, fromStr, toStr) {
  if (!rovers.length || !cameras.length) return [];

  const dates = getDateRange(fromStr, toStr);

  return rovers.flatMap(rover =>
    cameras.flatMap(camera =>
      dates.map(date => ({ rover, camera, date }))
    )
  );
}