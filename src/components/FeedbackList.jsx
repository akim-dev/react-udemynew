import React from 'react';
import FeedbackItem from './components/FeedbackItem';

function FeedbackList({ feedback }) {
  // conditional rendering

  if (!feedback || feedback.lenght === 0) {
    return <p>no Feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {/* using function */}
      {feedback.map(function (item) {
        return <div>{item.rating}</div>;
      })}

      {/* using arrow function */}
      {/* {feedback.map((item) => (
        <div>{item.rating }</div>
      ))} */}
    </div>
  );
}

export default FeedbackList;
