import React from 'react';
import './style.css';
import Header from './components/Header.jsx';
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';

export default function App() {
  const [Feedback, setFeedback] = useState(FeedbackData);

  return (
    <div className="container">
      <Header text="Feedback UI" />
      <FeedbackList feedback={Feedback} />
    </div>
  );
}
