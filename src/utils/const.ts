//urls
export const API_URL = 'https://api.themoviedb.org/3'
export const GET_MOVIES_FROM_COMPANY = `${API_URL}/discover/movie?&with_companies=`
export const GET_MOVIES_FROM_DISCOVER = `${API_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1`
export const GET_MOVIES_FROM_NOW_PLAYING = `${API_URL}/movie/now_playing?language=en-US&page=2`
export const GET_MOVIES_FROM_POPULAR = `${API_URL}/movie/popular?language=en-US&page=2`
export const GET_MOVIES_FROM_TOP_RATED = `${API_URL}/movie/top_rated?language=en-US&page=1`
export const GET_MOVIE_FROM_ID = `${API_URL}/movie/`

export const defaultFormFields = {
  email: '',
  password: '',
}

export const defaultFormUserFields = {
  name: '',
  email: '',
  password: '',
}