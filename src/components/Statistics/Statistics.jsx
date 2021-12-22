import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total ? (
      <ul className={s.box}>
        <li className={s.options}> Good:{good} </li>
        <li className={s.options}> Neutral:{neutral} </li>
        <li className={s.options}> Bad:{bad} </li>
        <li className={s.options}> Total:{total} </li>
        <li className={s.options}>Positive feedback: {positivePercentage}%</li>
      </ul>
    ) : (
      <Notification message="No feedback given" />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
