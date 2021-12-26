import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={s.box}>
    <li className={s.options}> Good:{good} </li>
    <li className={s.options}> Neutral:{neutral} </li>
    <li className={s.options}> Bad:{bad} </li>
    <li className={s.options}> Total:{total} </li>
    <li className={s.options}>Positive feedback: {positivePercentage}%</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
