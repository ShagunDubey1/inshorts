import axios from 'axios';

export default async function getAuthUser() {
  const APIURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`

  return await axios.get(APIURL);
}
