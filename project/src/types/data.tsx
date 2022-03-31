export type dataFilm = {
  id: number,
  name: string,
  posterImage: string,
  previewImage: string,
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

export type dataComment = {
  id: number,
  comment: string,
  rating: number,
  date: string,
  user: {
    id: number,
    name: string,
  },
}

export type dataComments = dataComments[];
