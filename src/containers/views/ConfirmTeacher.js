import React from 'react';
import { firebaseDatabase } from '../../helpers/firebase';

class ConfirmTeacher extends React.Component {
  state = {
    username: '',
    teacherCode: '',
    classId: '',
    teacherId: ''
  };

  updateName(event) {
    this.setState({ username: event.target.value });
  }

  changeTeacherCode(event) {
    this.setState({ teacherCode: event.target.value });
  }

  checkTeacherCode(event) {
    event.preventDefault();
    firebaseDatabase
      .ref('/tokens/' + this.state.teacherCode)
      .once('value')
      .then(snapshot => {
        const classId = snapshot.val().classId;
        const userId = snapshot.val().userId;
        this.setState({ classId: classId, teacherId: userId });
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.checkTeacherCode.bind(this)}>
          <div className="form-group">
            <label htmlFor="username">Gebruikersnaam: </label>
            <input
              type="text"
              name="username"
              id="username"
              required
              onChange={this.updateName.bind(this)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="teacher-code">Vul Leerkrachtscode in: </label>
            <input
              type="text"
              name="teacher-code"
              onChange={this.changeTeacherCode.bind(this)}
            />
            <input type="submit" value="Activeer code" />
          </div>
        </form>
      </div>
    );
  }
}

export default ConfirmTeacher;
