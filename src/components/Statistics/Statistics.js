import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ feedbacks }) => (
  <ul className={s.feedback__counts}>
    {feedbacks.map(item => (
      <FeedbackOpt key={item.id} name={item.name} />
    ))}
  </ul>
);

const FeedbackOpt = ({ name }) => {
  return <li className={s.item}>{name}:</li>;
};

export default Statistics;
