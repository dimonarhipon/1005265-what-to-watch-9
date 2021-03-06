import { useParams, useNavigate } from 'react-router-dom';
import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector} from '../../hooks';
import {postCommentAction} from '../../store/api-action';
import {AppRoute, CommentPostStatus} from '../../const';
import {postCommentRequest} from '../../store/comments-process/comments-process';

const MIN_LENGTH_TEXT = 50;
const MAX_LENGTH_TEXT = 400;

function Review() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const dispatch = useAppDispatch();
  const {commentPostStatus} = useAppSelector(({COMMENTS}) => COMMENTS);

  const navigate = useNavigate();
  const {id} = useParams();
  const isSendForm =
    comment.length > MIN_LENGTH_TEXT && comment.length < MAX_LENGTH_TEXT && rating !== 0;

  useEffect(() => {
    if (commentPostStatus === CommentPostStatus.Success) {
      navigate(`${AppRoute.Films}/${id}`);
      dispatch(postCommentRequest());
    }
  }, [id, navigate, commentPostStatus, dispatch]);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (id) {
      dispatch(postCommentAction({id, comment, rating}));
    }
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setRating(+value);
  };

  const handleTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setComment(value);
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}  >
      <div className="rating" onChange={handleRatingChange}>
        <div className="rating__stars" >
          <input className="rating__input" id="star-10" type="radio" name="rating" value="10" />
          <label className="rating__label" htmlFor="star-10">Rating 10</label>

          <input className="rating__input" id="star-9" type="radio" name="rating" value="9" />
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input className="rating__input" id="star-8" type="radio" name="rating" value="8" />
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input className="rating__input" id="star-7" type="radio" name="rating" value="7" />
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input className="rating__input" id="star-6" type="radio" name="rating" value="6" />
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input className="rating__input" id="star-3" type="radio" name="rating" value="3" />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
          <label className="rating__label " htmlFor="star-2">Rating 2</label>

          <input className="rating__input" id="star-1" type="radio" name="rating" value={rating} />
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={handleTextChange}
          value={comment}
          minLength={MIN_LENGTH_TEXT}
          maxLength={MAX_LENGTH_TEXT}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={!isSendForm}>Post</button>
        </div>
      </div>
    </form>
  );
}

export default Review;
