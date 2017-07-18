import React from 'react';
import { connect } from 'react-redux';
import { checkTeacherCode, createRoom } from '../../redux/actions';
import { Field, reduxForm } from 'redux-form';
import FormField from '../../components/form/FormField';
import Button from '../../components/button/Button';

class CreateRoom extends React.Component {
  render() {
    const { error, isLoading, checkTeacherCode, createRoom } = this.props;

    if (isLoading) return <div>Creating room...</div>;
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            createRoom(e.target['name'].value);
          }}
        >
          <h1>Maak een nieuwe ruimte</h1>
          <Field
            name="name"
            component={FormField}
            type="text"
            label="Voor- en achternaam"
            required
          />
          <Field
            name="teachersCode"
            type="text"
            component={FormField}
            id="teachersCode"
            label="Vul de leerkracht's code in"
            required
            onChange={checkTeacherCode}
          />
          {isValidCode && <Button type="submit">Maak</Button>}
          {!isValidCode &&
            <Button type="submit" disabled>
              Maak
            </Button>}
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

CreateRoom = connect(mapStateToProps, { checkTeacherCode, createRoom })(
  CreateRoom
);

export default reduxForm({
  form: 'create-room-form'
})(CreateRoom);
