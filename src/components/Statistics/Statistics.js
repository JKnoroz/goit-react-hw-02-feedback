import React from 'react';
import s from './Statistics.module.css';

// const Statistics = ({ feedbacks, count }) => (
//   <ul className={s.feedback__counts}>
//     {feedbacks.map(item => (
//       <li key={item.id} name={item.name}>
//         {item.name}: {count}
//       </li>
//     ))}
//   </ul>
// );

const Statistics = ({ good, neutral, bad, total, positive }) => (
  <ul className={s.feedback__counts}>
    <li className={s.item}>Good: {good}</li>
    <li className={s.item}>Neutral: {neutral}</li>
    <li className={s.item}>Bad: {bad}</li>
    <li className={s.item}>Total: {total}</li>
    <li className={s.item}>Positive feedback: {positive}%</li>
  </ul>
);

export default Statistics;
