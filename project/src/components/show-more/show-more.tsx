import {MouseEvent} from 'react';

type Props = {
  handlerShowMoreClick: (evt: MouseEvent<HTMLButtonElement>) => void,
}

function ShowMore({handlerShowMoreClick}: Props) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" onClick={handlerShowMoreClick} type="button">Show more</button>
    </div>
  );
}

export default ShowMore;
