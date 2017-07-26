import React from 'react';
import { connect } from 'react-redux';
import {
  checkTeacherCode,
  createRoom,
  checkTeacherCodeFulfilled
} from '../../redux/actions';
import { firebaseDatabase } from '../../helpers/firebase';
import { Field, reduxForm } from 'redux-form';
import FormField from '../../components/form/FormField';
import Button from '../../components/button/Button';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';

class CreateRoom extends React.Component {
  render() {
    const {
      error,
      isLoading,
      checkTeacherCode,
      createRoom,
      checkTeacherCodeFulfilled
    } = this.props;

    if (isLoading) return <div>Creating room...</div>;
    return (
      <div className="page">
        <Navbar />
        <div className="container">
          <div className="col-md-6">
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
              {this.props.room.isValidCode
                ? <Button type="submit">Maak</Button>
                : <Button type="submit" disabled>
                    Maak
                  </Button>}
            </form>
            {error &&
              <div>
                {error}
              </div>}
          </div>
          <div className="col-md-6">
            <h2>Of probeer het uit...</h2>
            <Button
              onClick={() => {
                firebaseDatabase
                  .ref('/tokens')
                  .child('public')
                  .once('value')
                  .then(snapshot => {
                    checkTeacherCodeFulfilled(snapshot.val());
                  })
                  .then(() => {
                    createRoom('');
                  });
              }}
            >
              Ontdek nu een verhaal
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  room: state.room,
  user: state.user
});

CreateRoom = connect(mapStateToProps, {
  checkTeacherCode,
  checkTeacherCodeFulfilled,
  createRoom
})(CreateRoom);

export default reduxForm({
  form: 'create-room-form'
})(CreateRoom);
