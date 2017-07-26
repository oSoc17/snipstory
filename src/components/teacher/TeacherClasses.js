import React from 'react';
import Class from './Class';
import AddClassForm from './AddClassForm';

class TeacherClasses extends React.Component {
  render() {
    const { classes, showToast, addClass, deleteClass } = this.props;
    return (
      <div className="teacher-classes">
        <div className="teacher-classes-list">
          {classes.classes && classes.classes.length > 0
            ? classes.classes.map(currentClass =>
                <Class
                  showToast={showToast}
                  key={currentClass.id}
                  onDelete={() => {
                    deleteClass(currentClass);
                  }}
                  {...currentClass}
                />
              )
            : <div>
                Je hebt nog geen klassen toegevoegd{' '}
                <span role="img" aria-label="Crying face">
                  😢
                </span>
              </div>}
        </div>
        <AddClassForm addClass={addClass} />
      </div>
    );
  }
}

export default TeacherClasses;
