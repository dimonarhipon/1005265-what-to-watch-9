import Main from '../main/main';

type promoFilmProps = {
  title: string,
  genre: string,
  year: number,
};

function App(promoFilmData: promoFilmProps) {
  return (
    <Main promoFilmData={promoFilmData} />
  );
}

export default App;
