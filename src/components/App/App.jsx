import React from 'react';
import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';

const options = ['good', 'neutral', 'bad'];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const result = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    const percentage = (good * 100) / result;
    return result ? Math.round(percentage) : 0;
  };

  const onLeaveFeedback = ({ target }) => {
    const { feedback } = target.dataset;

    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const percent = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title={`Please leave feedback`}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={`Statistics`}>
        {result > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={result}
            positivePercentage={percent}
          />
        )}
        {!result > 0 && <Notification message="No feedback given" />}
      </Section>
    </>
  );
}
