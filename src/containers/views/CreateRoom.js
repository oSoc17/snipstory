import React from 'react';
import { connect } from 'react-redux';
import { checkTeacherCode, createRoom } from '../../redux/actions';

class CreateRoom extends React.Component {
  render() {
    const {
      error,
      isLoading,
      isValidCode,
      checkTeacherCode,
      createRoom
    } = this.props;

    if (isLoading) return <div>Creating room...</div>;
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            createRoom();
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
            {!isValidCode && <span>checking...</span>}
          </div>
          <div className="form-group">
            {!isValidCode && <input type="submit" value="Maak" disabled />}
            {isValidCode && <input type="submit" value="Maak" />}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.room
});

export default connect(mapStateToProps, { checkTeacherCode, createRoom })(
  CreateRoom
);
