import React from 'react';
import gsap from 'gsap';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import { AppContainer } from './App.styled';
import { useState } from 'react';
import { useEffect } from 'react';
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const positivePercent = Math.round(good / (total / 100));
  const onLeaveFeedback = e => {
    const optionName = e.currentTarget.name;
    switch (optionName) {
      case 'good':
        setGood(prevVal => prevVal + 1);
        break;
      case 'neutral':
        setNeutral(prevVal => prevVal + 1);
        break;
      case 'bad':
        setBad(prevVal => prevVal + 1);
        break;
      default:
        return;
    }
  };
  useEffect(() => {
    gsap.fromTo(
      '.section',
      {
        scale: 0,
        opacity: 1,
      },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.25,
        duration: 1,
      }
    );
  }, []);
  return (
    <AppContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercent}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </AppContainer>
  );
};
export default App;
