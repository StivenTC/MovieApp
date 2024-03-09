export type FormEvent = React.FormEvent<HTMLFormElement>
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>
export type ChangeSelectEvent = React.ChangeEvent<HTMLSelectElement>

export interface MovieType {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: (number)[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface movieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: null;
  budget: number;
  genres?: (GenresEntity)[] | null;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: (ProductionCompaniesEntity)[] | null;
  production_countries?: (ProductionCountriesEntity)[] | null;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages?: (SpokenLanguagesEntity)[] | null;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface GenresEntity {
  id: number;
  name: string;
}
export interface ProductionCompaniesEntity {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
export interface ProductionCountriesEntity {
  iso_3166_1: string;
  name: string;
}
export interface SpokenLanguagesEntity {
  english_name: string;
  iso_639_1: string;
  name: string;
}
