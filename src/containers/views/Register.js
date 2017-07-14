import React from 'react';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {
  firebaseAuth,
  googleAuthProvider,
  firebaseDatabase
} from '../../helpers/firebase';
import GoogleLogo from './google.svg';
import FormField from '../../components/form/FormField';

const Register = ({
  pristine,
  submitting,
  handleSubmit,
  history,
  error,
  ...props
}) => {
  return (
    <div>
      <h1>Registreer</h1>
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
            return firebaseAuth
              .createUserWithEmailAndPassword(email, password)
              .then(user => {
                return firebaseDatabase
                  .ref(`/users/${user.uid}`)
                  .set({ ...user.providerData[0], displayName: name })
                  .then(_ => {
                    history.push('/teacher');
                  });
              })
              .catch(err => {
                if (err.code === 400 || err.code === 'auth/weak-password') {
                  throw new SubmissionError({
                    _error: 'Paswoord is niet sterk genoeg'
                  });
                } else if (err.code === 'auth/email-already-in-use') {
                  throw new SubmissionError({
                    email:
                      'Er is al een account geregistreerd met dit e-mailadres'
                  });
                }
                throw new SubmissionError({
                  _error: 'Er is iets fout gegaan, probeer het opnieuw'
                });
              });
          })}
        >
          <div>
            <Field
              name="name"
              component={FormField}
              type="text"
              label="Naam"
              required
            />
          </div>
          <div>
            <Field
              name="email"
              component={FormField}
              type="email"
              label="Email"
              required
            />
          </div>
          <div>
            <Field
              name="password"
              component={FormField}
              type="password"
              label="Paswoord"
            />
          </div>
          <div>
            <Field
              name="password1"
              component={FormField}
              type="password"
              label="Herhaal paswoord"
            />
          </div>
          {error &&
            <div>
              {error}
            </div>}
          <Button type="submit" disabled={pristine || submitting}>
            Registreer
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
  return errors;
};
export default reduxForm({ form: 'login', validate })(Register);
