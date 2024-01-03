import React from 'react';
import Statistics from './Statistics';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercent: 0,
  };

  handleGood = () => {
    this.setState(prev => ({
      good: prev.good + 1,
    }));
    this.countTotalFeedBack();
    this.countPositiveFeedbackPercentage();
  };

  handleNeutral = () => {
    this.setState(prev => ({
      neutral: prev.neutral + 1,
    }));
    this.countTotalFeedBack();
    this.countPositiveFeedbackPercentage();
  };

  handleBad = () => {
    this.setState(prev => ({
      bad: prev.bad + 1,
    }));
    this.countTotalFeedBack();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedBack = () => {
    this.setState(prev => ({
      total: prev.good + prev.neutral + prev.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prev => ({
      positivePercent: Math.ceil((prev.good / prev.total) * 100),
    }));
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={this.handleGood}
            onNeutral={this.handleNeutral}
            onBad={this.handleBad}
          />
        </Section>

        {this.state.total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercent={this.state.positivePercent}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default Feedback;
