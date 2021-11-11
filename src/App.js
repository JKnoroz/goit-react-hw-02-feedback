import React, { Component } from 'react';
import options from './data/options.json';
import Feedback from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';

import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const name = e.target.textContent;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  // countFeedback = e => {
  //   const name = e.target.textContent;
  //   console.log(this.state[name]);
  //   return name;
  // };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <div className="App">
        <h1>Please leave feedback</h1>
        <Feedback options={options} onLeaveFeedback={this.handleFeedback} />
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive}
        />
      </div>
    );
  }
}

export default App;
