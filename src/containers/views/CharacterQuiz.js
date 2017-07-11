import React from 'react';
import './CharacterQuiz.css';

class CharacterQuiz extends React.Component {
  state = {
    currentStep: 0,
    selectedAnswers: new Set(),
    completed: false,
    selectedIndex: null
  };

  selectAnswer(index, answer) {
    this.setState(prevState => {
      const newAnswers = prevState.selectedAnswers.add(answer);
      return {
        ...prevState,
        selectedAnswers: newAnswers,
        selectedIndex: index
      };
    });
  }

  get isCompleted() {
    return this.props.questions.length === this.state.currentStep;
  }

  next() {
    if (this.isCompleted) {
      this.props.completeQuiz();
    } else {
      this.setState(prevState => ({
        ...prevState,
        currentStep: prevState.currentStep + 1,
        selectedIndex: null
      }));
    }
  }

  render() {
    const { questions } = this.props;
    const { currentStep, selectedIndex } = this.state;

    if (!questions || questions.length === 0) {
      return <div>Loading...</div>;
    }

    if (this.isCompleted) {
      return <div>Completed</div>;
    }

    return (
      <div>
        <div>
          <h2>
            {questions[currentStep].question}
          </h2>
        </div>
        <div>
          {questions[currentStep].answers.map((answer, i) =>
            <button
              key={i}
              className={`btn${selectedIndex === i ? ' selected' : ''}`}
              onClick={_ => {
                this.selectAnswer(i, answer);
              }}
            >
              {answer}
            </button>
          )}
        </div>
        <div>
          <button onClick={this.next.bind(this)}>Next (put icon here!)</button>
        </div>
      </div>
    );
  }
}

export default CharacterQuiz;
