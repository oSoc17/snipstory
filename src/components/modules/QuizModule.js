import React from 'react';

class QuizModule extends React.Component {
  state = {
    answer: null
  }

  selectAnswer(event) {

  }

  confirmAnswer() {
    if(this.answer == this.props.correction) return true;
    return false;
  }

  render() {
    {if(this.props.resources.length == 1) this.props.resources[0]}
    <div>
      <p>{this.props.text}</p>
      <div>
        <button value="Y">
          Yes
        </button>
        <button value="N">
          No
        </button>
      </div>
    </div>
  }
}

export default QuizModule;
