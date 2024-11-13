import axios from 'axios';

export default async function getNews() {
  return await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=90f72d2bc14047a18c8383103d277f52");
}
