import React from 'react';
import s from './Feedback.module.css';

const Feedback = ({ feedbackOptions, onLeaveFeedback }) => (
  <div>
    {feedbackOptions.map(option => (
      <FeedbackBtn
        key={option.id}
        name={option.name}
        onLeaveFeedback={onLeaveFeedback}
      />
    ))}
  </div>
);

const FeedbackBtn = ({ name, onLeaveFeedback }) => {
  return (
    <button type="button" className={s.FeedbackBtn} onClick={onLeaveFeedback}>
      {name}
    </button>
  );
};

export default Feedback;
