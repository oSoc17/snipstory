import React from 'react';
import Button from '../../../components/button/Button';
import { firebaseAuth, googleAuthProvider } from '../../../helpers/firebase';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import GoogleLogo from './assets/google.svg';
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
            {error &&
              <div>
                {error}
              </div>}

            <div className="login-button-container">
              <Button type="submit" disabled={pristine || submitting}>
                <span>Inloggen</span>
              </Button>

              <div className="test">
                <Button
                  onClick={() => {
                    firebaseAuth
                      .signInWithPopup(googleAuthProvider)
                      .catch(_ => {
                        showToast({
                          text:
                            'Inloggen met Google is mislukt, probeer het opnieuw',
                          status: 'error'
                        });
                      });
                  }}
                >
                  <img src={GoogleLogo} alt="Google logo" />
                  <span>Login met Google</span>
                </Button>
              </div>
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
