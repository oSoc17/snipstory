import React from 'react';
import { connect } from 'react-redux';
import { checkTeacherCode, createRoom } from '../../redux/actions';

class CreateRoom extends React.Component {
  render() {
    const { error, isLoading, checkTeacherCode, createRoom } = this.props;

    if (isLoading) return <div>Creating room...</div>;
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            createRoom(e.target);
          }}
        >
          <h1>Maak een nieuwe ruimte</h1>
          <div className="form-group">
            <label htmlFor="username">Voor- en Achternaam: </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="teachersCode">Code van de leerkracht: </label>
            <input
              type="text"
              name="teachersCode"
              id="teachersCode"
              required
              defaultValue="public"
              onChange={checkTeacherCode}
            />
            {!this.props.state.isValidCode && <span>checking...</span>}
          </div>
          <div className="form-group">
            {!this.props.state.isValidCode &&
              <input type="submit" value="Maak" disabled />}
            {this.props.state.isValidCode &&
              <input type="submit" value="Maak" />}
          </div>
        </form>
        {error &&
          <div>
            {error}
          </div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state: state.room,
  user: state.user
});

export default connect(mapStateToProps, { checkTeacherCode, createRoom })(
  CreateRoom
);
