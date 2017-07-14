import React from 'react';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {
  firebaseAuth,
  googleAuthProvider,
  firebaseDatabase
} from '../../helpers/firebase';
import GoogleLogo from './google.svg';
const Register = ({ pristine, submitting, handleSubmit, history }) => {
  return (
    <div>
      <h1>Register</h1>
      <div>
        <Button
          onClick={() => {
            firebaseAuth.signInWithRedirect(googleAuthProvider);
            history.push('/teacher');
          }}
        >
          <img src={GoogleLogo} alt="Google logo" />
          <span>Registreer met Google</span>
        </Button>
        <form
          onSubmit={handleSubmit(({ name, email, password }) => {
            firebaseAuth
              .createUserWithEmailAndPassword(email, password)
              .then(user => {
                firebaseDatabase
                  .ref(`/users/${user.uid}`)
                  .set({ ...user.providerData[0], displayName: name })
                  .then(_ => {
                    history.push('/login');
                  });
              });
          })}
        >
          <div>
            <label htmlFor="name">Naam</label>
            <Field
              name="name"
              component="input"
              type="name"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="jane@example.com"
            />
          </div>
          <div>
            <label htmlFor="password">Paswoord</label>
            <Field name="password" component="input" type="password" />
          </div>
          <div>
            <label htmlFor="password1">Herhaal paswoord</label>
            <Field name="password1" component="input" type="password" />
          </div>
          <Button type="submit" disabled={pristine || submitting}>
            Register
          </Button>
        </form>
      </div>
      <div>
        <span>Heb je al een account?</span>
        <Link to="/teacher/login">Log hier in!</Link>
      </div>
    </div>
  );
};

const validate = ({ password, password1, email }) => {
  const errors = {};
  if (password !== password1) {
    errors.password1 = 'Paswoorden zijn niet gelijk';
  }
};
export default reduxForm({ form: 'login', validate })(Register);
