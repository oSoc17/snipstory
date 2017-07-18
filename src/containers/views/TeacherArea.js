import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/button/Button';
import Avatar from '../../components/avatar/Avatar';
import { logout, showToast } from '../../redux/actions';
import TeacherClasses from '../../components/teacher/TeacherClasses';

class TeacherArea extends React.Component {
  render() {
    const { user, logout, showToast } = this.props;

    return (
      <div>
        <h1>Leerkrachtenplatform</h1>
        <div>
          <Avatar
            size="large"
            src={user.photoURL}
            alt={`${user.displayName}'s profielfoto`}
          />
          <div>
            {user.displayName}
          </div>
          <div>
            {user.email}
          </div>
          <Button onClick={logout}>Uitloggen</Button>
        </div>
        <Button to="/teacher/stories/add">Voeg een verhaal toe</Button>
        <TeacherClasses showToast={showToast} classes={[]} />
      </div>
    );
  }
}

export default connect(null, { logout, showToast })(TeacherArea);
