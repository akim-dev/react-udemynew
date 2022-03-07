import React from 'react';
import './style.css';
import Header from './components/Header.jsx';
import FeedbackItem from './components/FeedbackItem';

export default function App() {
  return (
    <div>
      <Header text="Feedback UI" />
      <FeedbackItem/>
    </div>
  );
}
