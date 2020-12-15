import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import FeedbackOptions from "./components/Feedback-options";
import NotificationMessage from "./components/Notification-message";
import Section from "./components/Section";
import Statistics from "./components/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  optionsNames = Object.keys(this.state);
  static propTypes = {
    option: PropTypes.string.isRequired,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };
  onLeaveFeedback = ({ option }) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="App">
        <Section title="Please leave feedback">
          {
            <FeedbackOptions
              options={this.optionsNames}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          }
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <NotificationMessage message="No feedback given" />
        )}
      </div>
    );
  }
}

export default App;
