import React from 'react';
import Class from './Class';
import Button from '../button/Button';

class TeacherClasses extends React.Component {
  state = {
    addClassFormExpanded: false
  };

  render() {
    const { classes, showToast } = this.props;
    const { addClassFormExpanded } = this.state;
    return (
      <div className="teacher-classes">
        <div className="teacher-classes-list">
          {classes && classes.length > 0
            ? classes.map(currentClass =>
                <Class
                  showToast={showToast}
                  key={currentClass.code}
                  {...currentClass}
                />
              )
            : <div>
                Je hebt nog geen klassen toegevoegd {' '}
                <span role="img" aria-label="Crying face">
                  😢
                </span>
              </div>}
        </div>
        <Button onClick={this.setState({ addClassFormExpanded: true })}>
          Voeg een klas toe
        </Button>
        {addClassFormExpanded && <div>add class form goes here</div>}
      </div>
    );
  }
}

export default TeacherClasses;
