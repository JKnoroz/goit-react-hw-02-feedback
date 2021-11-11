import React from 'react';
import s from './Feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
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
