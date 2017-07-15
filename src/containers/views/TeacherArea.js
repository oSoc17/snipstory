import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/button/Button';
import Avatar from '../../components/avatar/Avatar';
import { logout } from '../../redux/actions';

class TeacherArea extends React.Component {
  render() {
    const { user, logout } = this.props;

    return (
      <div>
        <h1>Teacher Area</h1>
        <div>
          <Avatar
            size="large"
            src={user.photoURL}
            alt={`${user.displayName}'s profile picture`}
          />
          <div>
            {user.displayName}
          </div>
          <div>
            {user.email}
          </div>
          <Button onClick={logout}>Logout</Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({});
export default connect(mapStateToProps, { logout })(TeacherArea);
