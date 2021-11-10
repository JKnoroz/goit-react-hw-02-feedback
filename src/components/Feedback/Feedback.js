import React from 'react';
import s from './Feedback.module.css';

const Feedback = ({ feedbackOptions, onLeaveFeedback }) => (
  <ul>
    {feedbackOptions.map(option => (
      <FeedbackBtn
        key={option.id}
        name={option.name}
        onClick={onLeaveFeedback}
      />
    ))}
  </ul>
);

const FeedbackBtn = ({ name }) => {
  return (
    <button
      type="button"
      className={s.FeedbackBtn}
      onClick={() => {
        console.log(name);
      }}
    >
      {name}
    </button>
  );
};

export default Feedback;
