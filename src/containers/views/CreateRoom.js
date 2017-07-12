import React from 'react';
import { connect } from 'react-redux';
import { checkTeacherCode } from '../../redux/actions';

class CreateRoom extends React.Component {
  render() {
    const { isCheckingCode, checkTeacherCode } = this.props;

    return (
      <div>
        <form>
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
          </div>
          <div className="form-group">
            <input type="submit" value="Maak" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.room
});

export default connect(mapStateToProps, { checkTeacherCode })(CreateRoom);
