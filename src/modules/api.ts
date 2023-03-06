import { config } from "./config";

const BASE_URL = config.api_base_url;
const API_KEY = config.api_key;

export async function getPopularMovies(page = 1) {
  let data = [];
  try {
    const response = await fetch(
      `${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`
    );
    const responseData = await response.json();
    data = responseData?.results;
  } catch (error) {}
  return data;
}
