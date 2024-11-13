import axios from 'axios';

export default async function getNews(options) {
  const {category} = options;

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=90f72d2bc14047a18c8383103d277f52`;

  return await axios.get(url);
}
