type Info = {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
};
type ResultChar = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location2;
  location: Location2;
  image: string;
  episode: string[];
  url: string;
  created: string;
};
type Location2 = {
  name: string;
  url: string;
};
type DataChar = {
  info: Info;
  results: ResultChar[];
};

type ResultLoc = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};
type DataLoc = {
  info: Info;
  results: ResultLoc[];
};

type ResultEp = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};
type DataEp = {
  info: Info;
  results: ResultEp[];
};
