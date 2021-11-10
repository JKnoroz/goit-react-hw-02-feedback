import React, { Component } from 'react';
import feedbackOptions from './data/feedbackOptions.json';
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
    const name = e.target.value;
    this.setState(prevState => {
      return {
        [name]: (prevState[name] += 1),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Please leave feedback</h1>
        <Feedback
          feedbackOptions={feedbackOptions}
          onLeaveFeedback={this.handleFeedback}
        />
        <h2>Statistics</h2>
        <Statistics feedbacks={feedbackOptions} />
      </div>
    );
  }
}

export default App;
