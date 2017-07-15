import React from 'react';
import Button from '../../components/button/Button';
import { firebaseAuth, googleAuthProvider } from '../../helpers/firebase';
import { Link } from 'react-router-dom';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { LogIn } from 'react-feather';
import GoogleLogo from './google.svg';
import FormField from '../../components/form/FormField';

const Login = ({ pristine, submitting, handleSubmit, error }) => {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <Button
          onClick={() => {
            firebaseAuth.signInWithPopup(googleAuthProvider).catch(err => {
              // error toast?
            });
          }}
        >
          <img src={GoogleLogo} alt="Google logo" />
          <span>Login met Google</span>
        </Button>
        <form
          onSubmit={handleSubmit(({ email, password }) => {
            return firebaseAuth
              .signInWithEmailAndPassword(email, password)
              .catch(_ => {
                throw new SubmissionError({
                  _error: 'Sorry, e-mailadres of paswoord is niet correct'
                });
              });
          })}
        >
          <div>
            <Field
              name="email"
              component={FormField}
              type="email"
              label="E-mailadres"
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
          {error &&
            <div>
              {error}
            </div>}
          <Button type="submit" disabled={pristine || submitting}>
            <LogIn />
            <span>Login</span>
          </Button>
        </form>
      </div>
      <div>
        <span>Heb je nog geen account?</span>
        <Link to="/teacher/register">Registreer hier!</Link>
      </div>
    </div>
  );
};
export default reduxForm({ form: 'login' })(Login);
