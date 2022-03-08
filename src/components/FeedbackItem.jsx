// import React from 'react';
// import { useState } from 'react';
// import Card from './shared/Card';

// function FeedbackItem({ feedback }) {
//   console.log(feedback);
//   const [rating, setRating] = useState(10);
//   // const [text, setText] = useState('This is default text from useState');

//   // const hadleChangeRating = function () {
//   //   setRating(function (prev) {
//   //     console.log(prev);
//   //     return prev + 1;
//   //   });
//   // };

//   return (
//     <Card>
//       <Card />
//       <div className="num-display">{rating}</div>
//       {/* <div className="text-display">{text}</div> */}
//       {/* <button onClick={hadleChangeRating}>Click Me</button> */}
//     </Card>
//   );
// }

// export default FeedbackItem;

// new feedback item
import { useState } from 'react';
import React from 'react';

function FeedbackItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('this is from usestate hard code');

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
}

export default FeedbackItem;
