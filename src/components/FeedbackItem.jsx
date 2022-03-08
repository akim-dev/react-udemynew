import React from 'react';
import { useState } from 'react';
import Card from './shared/Card';

function FeedbackItem({ item }) {
  console.log(item);
  const [rating, setRating] = useState(10);
  // const [text, setText] = useState('This is default text from useState');

  // const hadleChangeRating = function () {
  //   setRating(function (prev) {
  //     console.log(prev);
  //     return prev + 1;
  //   });
  // };

  return (
    <div className="card">
      <Card />
      <div className="num-display">{item}</div>
      <div className="text-display">{item}</div>
      {/* <button onClick={hadleChangeRating}>Click Me</button> */}
    </div>
  );
}

export default FeedbackItem;
