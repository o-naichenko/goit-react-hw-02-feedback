import React, { Component } from "react";
import "./App.css";
import FeedbackOptions from "./components/Feedback-options";
import Statistics from "./components/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = ({ option }) => {
    this.setState((prevState) => {
      console.log(option);
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  // addGoodFeedback = () => {
  //   this.setState((prevState) => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };
  // addBadFeedback = () => {
  //   this.setState((prevState) => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };
  // addNeutralFeedback = () => {
  //   this.setState((prevState) => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };
  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value);
  }
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="App">
        <div>
          <strong>Please leave feedback</strong>

          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;
