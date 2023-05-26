const AUTH_TOKEN = '34961827-2851942e02d8a95988676b330';

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

const options = {
  key: AUTH_TOKEN,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: false,
  per_page: 12,
};

export default options;
