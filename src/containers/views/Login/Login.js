import React from 'react';
import Button from '../../../components/button/Button';
import { firebaseAuth, googleAuthProvider } from '../../../helpers/firebase';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import FormField from '../../../components/form/FormField';
import './Login.css';

const Login = ({ pristine, submitting, handleSubmit, error, showToast }) => {
  return (
    <div className="login-big-container">
      <div className="login-container">
        <div className="login-small-container">
          <h1 className="login-title">Inloggen</h1>
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
            {error &&
              <div className="form-field__error">
                {error}
              </div>}
            <div className="input-field">
              <Field
                name="email"
                component={FormField}
                type="email"
                label="E-mailadres"
              />
            </div>
            <div className="input-field">
              <Field
                name="password"
                component={FormField}
                type="password"
                label="Wachtwoord"
              />
            </div>

            <div className="login-button-container">
              <Button
                className="login-button"
                type="submit"
                disabled={pristine || submitting}
              >
                <span className="login-text">Inloggen</span>
              </Button>

            </div>
          </form>
        </div>
        <div className="register-container">
          <Button to="/teacher/register">Registreren</Button>
        </div>
      </div>
    </div>
  );
};
export default reduxForm({ form: 'login' })(Login);
