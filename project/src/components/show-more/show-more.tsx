
type Props = {
  showMoreHandler: () => void,
}

function ShowMore(showMoreHandler: Props) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" onClick={() => showMoreHandler} type="button">Show more</button>
    </div>
  );
}

export default ShowMore;
