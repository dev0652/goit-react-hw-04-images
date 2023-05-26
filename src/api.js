import axios from 'axios';

// https://pixabay.com/api/?q=cat&page=1&key=34961827-2851942e02d8a95988676b330&image_type=photo&orientation=horizontal&per_page=12

const REACT_APP_API_KEY = '34961827-2851942e02d8a95988676b330';

const searchParameters = {
  key: REACT_APP_API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: false,
  per_page: 12,
};

axios.defaults.baseURL = 'https://pixabay.com/api';

// ########################################

export const fetchImages = async (page, q) => {
  const params = {
    q,
    page,
    ...searchParameters,
  };

  const response = await axios.get('/?', { params });

  return response.data.hits;
};

// incrementPage() {
//   this.page += 1;
// }

// resetPage() {
//   this.page = 1;
// }

// get q() {
//   return this.query;
// }

// set q(newQuery) {
//   this.query = newQuery;
// }
