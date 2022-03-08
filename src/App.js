// import React from 'react';
// import './style.css';
// import Header from './components/Header.jsx';
// import FeedbackList from './components/FeedbackList';
// import { useState } from 'react';
// import FeedbackItem from './components/FeedbackItem';
// import FeedbackData from './data/FeedbackData';

// export default function App() {
//   const [feedback, setFeedback] = useState(FeedbackData);

//   return (
//     <div className="container">
//       <Header text="Feedback UI" />
//       <FeedbackItem feedback={feedback} />
//       {/* <FeedbackList feedback={feedback} /> */}
//     </div>
//   );
// }

import React from 'react';
import { useState } from 'react';

import FeedbackItem from './components/FeedbackItem';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;
