import Card from '../../components/card/card';
import {dataFilms} from '../../types/data';

type typeProps = {
  films: dataFilms,
}

function CardList({films}: typeProps) {
  return (
    <div className="catalog__films-list">
      {films.map((film, id) => {
        const keyValue = `${id}`;
        return (
          <Card key={keyValue} {...film} />
        );
      })}
    </div>
  );
}

export default CardList;
