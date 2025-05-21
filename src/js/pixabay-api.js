import axios from 'axios';

const API_KEY = '50366269-4ee160a1f4b6fa516c5257acb';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    page,
    per_page: PER_PAGE,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  try {
    const response = await axios.get(`${BASE_URL}?${searchParams}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error.message);
    throw error;
  }
}
