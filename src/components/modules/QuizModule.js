import React from 'react';

class QuizModule extends React.Component {
  state = {
    answer: null
  };

  selectAnswer(event) {
    this.answer = event.target.value;
    if (this.confirmAnswer) {
      // green border
    } else {
      // red border
    }
  }

  get confirmAnswer() {
    return this.answer === this.props.correction;
  }

  render() {
    return (
      <div>
        {this.props.resources &&
          <img src={this.props.resources[0]} alt="QuizImage" />}
        <p>
          {this.props.text}
        </p>
        <div>
          <button value="Y" onClick={this.selectAnswer.bind(this)}>
            Yes
          </button>
          <button value="N" onClick={this.selectAnswer.bind(this)}>
            No
          </button>
        </div>
      </div>
    );
  }
}

export default QuizModule;
