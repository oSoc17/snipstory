import React from 'react';
import Button from '../../../components/button/Button';
import Navbar from '../../../components/nav/Navbar';
import Footer from '../../../components/footer/Footer';


import { Link } from 'react-router-dom';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {firebaseAuth, googleAuthProvider, firebaseDatabase} from '../../../helpers/firebase';
import FormField from '../../../components/form/FormField';
import './AddStories.css'

class AddStories extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "",
            summary: "",
            source:"",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            title: e.target.title.value,
            summary: e.target.summary.value,
            source: e.target.source.value,
        });

        console.log(this.state.summary);

        // const storiesRef = firebase.firebaseDatabase().ref('stories');
        // const story = {
        //     title: this.state.title,
        //     summary: this.state.summary,
        //     source: this.state.source
        // }
        // storiesRef.push(story);
        // this.setState({
        //
        // })


    }


    render() {
        const {
            user,
            logout
        } = this.props;

    return (
        <div className="page">
            <Navbar />
            <h1>Voeg een verhaal toe</h1>
            <div>
                <p> Hi, {user.displayName}</p>
            </div>

            <form onSubmit={this.handleSubmit}>
            <div className="general-container">
                <div>
                    <Field
                        name="title"
                        component={FormField}
                        type="text"
                        label="Naam personage"
                        required
                    />
                </div>
                <div>
                    <Field
                        name="summary"
                        component={FormField}
                        type="text"
                        label="Korte omschrijving"
                        required
                    />
                </div>
                <div>
                    <Field
                        name="source"
                        component={FormField}
                        type="text"
                        label="Bron"
                        required
                    />
                </div>
                <div>
                    <Field
                        name="dayOfBirth"
                        component={FormField}
                        type="text"
                        label="Bron"
                        required
                    />
                </div>


                <Button>Voeg een verhaal toe</Button>

            <Button onClick={logout}>Uitloggen</Button>
            </div>
            </form>
            <Footer />
        </div>
        );
    };
};

export default reduxForm({ form: 'addStories'})(AddStories);
