import React from 'react';
import { useState } from 'react';

function FeedbackItem({ item }) {
  // const [rating, setRating] = useState(10);
  // const [text, setText] = useState('This is default text from useState');

  const hadleChangeRating = function () {
    setRating(function (prev) {
      console.log(prev);
      return prev + 1;
    });
  };

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button onClick={hadleChangeRating}>Click Me</button>
    </div>
  );
}

export default FeedbackItem;
