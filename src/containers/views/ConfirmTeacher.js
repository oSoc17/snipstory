import React from 'react';
import FirebaseHelper from '../../helpers/FirebaseHelper';

class ConfirmTeacher extends React.Component {
  state = {
    username: '',
    teacherCode: ''
  };

  updateName(event) {
    this.setState({ username: event.target.value });
  }

  changeTeacherCode(event) {
    this.setState({ teacherCode: event.target.value });
  }

  checkTeacherCode(event) {
    event.preventDefault();
    FirebaseHelper.isValidTeacherCode(this.state.teacherCode);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="username">Gebruikersnaam: </label>
          <input
            type="text"
            name="username"
            id="username"
            required
            onChange={this.updateName.bind(this)}
          />
          <input type="submit" value="Ok" />
        </form>

        <form>
          <label htmlFor="teacher-code">Vul Leerkrachtscode in: </label>
          <input
            type="text"
            name="teacher-code"
            onChange={this.changeTeacherCode.bind(this)}
          />
          <input
            type="submit"
            value="Activeer code"
            onClick={this.checkTeacherCode.bind(this)}
          />
        </form>
      </div>
    );
  }
}

export default ConfirmTeacher;
