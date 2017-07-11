import React from 'react';

class ImageQuizModule extends React.Component {
  state = {
    answer: null
  };

  selectAnswer(event) {
    console.log(event.target);
    this.answer = parseInt(event.target.id, 10);
    if (this.confirmAnswer) {
      // green border
      console.log('green');
    } else {
      // red border
      console.log('red');
    }
  }

  get confirmAnswer() {
    return this.answer === this.props.correction;
  }

  render() {
    return (
      <div>
        <p>
          {this.props.text}
        </p>
        <div className="images">
          <div>
            {this.props.resources.map((resource, i) =>
              <img
                className="image"
                key={i}
                id={i}
                src={resource}
                onClick={this.selectAnswer.bind(this)}
                alt={'ImageQuiz' + i}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageQuizModule;
