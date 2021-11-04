import React from 'react';

class Counter extends React.Component {
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">0</span>
        <div className="Counter__controls">
          <button type="button">Увеличить</button>
          <button type="button">Уменьшить</button>
        </div>
      </div>
    );
  }
}

export default Counter;
