import React from 'react';
import gsap from 'gsap';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import { AppContainer } from './App.styled';
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  componentDidMount() {
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
  }
  countTotalFeedback() {
    return Object.keys(this.state).reduce(
      (acc, key) => this.state[key] + acc,
      0
    );
  }
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (!total) return 0;
    const positiveAmount = this.state.good;
    return Math.round(positiveAmount / (total / 100));
  }
  onLeaveFeedback = e => {
    const optionName = e.currentTarget.name;
    this.setState(prevState => ({ [optionName]: prevState[optionName] + 1 }));
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <AppContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </AppContainer>
    );
  }
}
export default App;
