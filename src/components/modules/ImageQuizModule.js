import React from 'React';

class ImageQuizModule extends React.Component {
  state = {
    answer: null
  }

  selectAnswer(event) {
    // add vote
    // Check if all users voted
    // Show right answer when all users voted
  }

  confirmAnswer() {
    if(this.answer == this.props.correction) return true;
    return false;
  }

  render() {
    <div>
      <p>{this.props.text}</p>
      <div class="images">
        <div>
          {this.props.resources.map((resource, i) => <img class="image" key={i} id={i} src={resource} onClick={this.selectAnswer}/>)}
        </div>
      </div>
    </div>
  }
}

export default ImageQuizModule;
