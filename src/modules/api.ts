import { config } from "./config";

const BASE_URL = config.api_base_url;
const API_KEY = config.api_key;

/**
 * Obtém os filmes mais populares para exibi-los na tela principal
 * @async
 * @function getPopularMovies
 * @param {number} page - Recebe a página a ser buscada na request
 * @return {Array} Um array com os filmes e seus dados
 */

export async function getPopularMovies(page = 1): Promise<any> {
  let data = [];
  try {
    const response = await fetch(
      `${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}&language=pt-BR`
    );
    const responseData = await response.json();
    data = responseData?.results;
    console.log("DAT: ", data);
  } catch (error) {}
  return data;
}

/**
 * Buscar um determinado filme na base de dados
 * @async
 * @function getMoviesFromQuery
 * @param query - O trecho do título do filme a ser buscado na API
 * @return {Array} - Os filmes encontrados cujos títulos se assemelham ao texto buscado
 */

export async function getMoviesFromQuery(query: string): Promise<any> {
  let data = [];

  try {
    const response = await fetch(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${1}&language=pt-BR`
    );
    const responseData = await response.json();
    data = responseData?.results;
  } catch (error) {}

  return data;
}
