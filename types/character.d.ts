type URI = string;
export interface ICharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: URI;
  films: URI[];
  species: URI[];
  vehicles: URI[];
  starship: URI[];
  created: string;
  edited: string;
  url: URI;
}

export interface IResults {
  count: number;
  next: null;
  previous: null;
  results: ICharacter[];
}

export interface ICharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: URI;
  films: URI[];
  species: URI[];
  vehicles: URI[];
  starship: URI[];
  created: string;
  edited: string;
  url: URI;
}

export interface IFilmData {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: URI[];
  producer: string;
  release_date: string;
  species: URI;
  starships: URI;
  title: string;
  url: URI;
  vehicles: URI[];
}
