import React from 'react';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {
  firebaseAuth,
  googleAuthProvider,
  firebaseDatabase
} from '../../../helpers/firebase';
import FormField from '../../../components/form/FormField';
import './AddStories.css'

const AddStories = ({
    fullName,
    summary,
    source,
    // More to come
    pristine,
    submitting,
    handleSubmit,
    history,
    error
}) => {
    return (
        <div>
            <h1 className="addStory-title">Add new stories</h1>
            <div>
                <form
                onSubmit={handleSubmit((stories) =>
                    return firebaseDatabase
                    .ref('/stories/${stories.uid}')
                    .set({ ...stories.providerData[0], storyTitle: fullName})
                    .then(_ => {
                        hist
                    })
                )};
            </div>
        </div>
    )
}
