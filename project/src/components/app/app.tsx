import Main from '../main/main';

type promoFilmProps = {
  title: string,
  genre: string,
  year: number,
};

function App({title, genre, year}: promoFilmProps) {
  return (
    <Main
      title={title}
      genre={genre}
      year={year}
    />
  );
}

export default App;
