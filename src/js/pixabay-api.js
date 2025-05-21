import axios from 'axios';

const API_KEY = '50366269-4ee160a1f4b6fa516c5257acb';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios
    .get(`${BASE_URL}?${searchParams}`)
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      console.error('Error fetching images:', error.message);
      throw error;
    });
}
