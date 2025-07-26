import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '51380954-6619e500596c0682c7775fe9d';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  try {
    const response = await axios(URL, {
      params: {
        key: KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: PER_PAGE,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}
