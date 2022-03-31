import { useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadCommentsAction} from '../../store/api-action';
import Loader from '../../components/loader/loader';


/* eslint-disable no-console */
function TabReview() {

  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(loadCommentsAction(id));
    }
  }, [dispatch, id]);

  const {comments} = useAppSelector(({COMMENTS}) => COMMENTS);

  if (!comments) {
    return <Loader />;
  }

  return (
    <div className="film-card__reviews film-card__row"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '30px',
      }}
    >
      {comments.map(({ comment, rating, date}) => (
        <div className="review" key={rating}>
          <blockquote className="review__quote">
            <p className="review__text">
              {comment}
            </p>

            <footer className="review__details">
              <cite className="review__author"></cite>
              <time className="review__date" dateTime="2016-12-24">{date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{rating}</div>
        </div>
      ))}
    </div>
  );
}

export default TabReview;
