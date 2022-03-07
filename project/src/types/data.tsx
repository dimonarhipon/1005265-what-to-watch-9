export type dataFilm = {
  id: number,
  name: string,
  image: string,
  posterImage: string,
  backgroundImage: string,
  backgroundColor: string,
  description: string,
  rating: number,
  scoresCount: number,
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: number,
  isFavorite: boolean,
  videoLink: string,
  previewVideoLink: string,
}

export type dataFilms = dataFilm[];


