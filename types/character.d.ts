type URI = string;

export interface ICharacter {
  count: number;
  next: null;
  previous: null;
  results: {
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
  }[];
  species: URI[];
  vehicles: URI[];
  starship: URI[];
  created: string;
  edited: string;
  url: URI;
}
