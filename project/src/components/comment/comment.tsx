import { useState, ChangeEvent } from 'react';

function Comment() {
  const [text, setText] = useState('');

  const textChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const value = evt.target.value;
    setText(value);
  };

  return (
    <textarea
      className="add-review__textarea"
      name="review-text"
      id="review-text"
      placeholder="Review text"
      onChange={textChangeHandler}
      value={text}
    >
    </textarea>
  );
}

export default Comment;
