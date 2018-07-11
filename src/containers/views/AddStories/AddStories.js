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
            id:"",
            title: "",
            summary: "",
            source:"",
            dayOfBirth:"",
            dayOfDeath:"",
            age:"",
            level:"",
            difficulty:"",
            creationTips:"",
            link:"",
            nationality:"",


        }
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(this.state.summary);
    //
    //     const storiesRef = firebase.firebaseDatabase().ref('stories');
    //     const story = {
    //         title: this.state.title,
    //         summary: this.state.summary,
    //         source: this.state.source
    //     }
    //     storiesRef.push(story);
    //     this.setState({
    //
    //     })
    //
    //
    // }


    render() {
        const {
            pristine,
            submitting,
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

            <form onSubmit={this.props.handleSubmit(({id,...fields}) => {
                let o = firebaseDatabase.ref('stories/');

                o.child(id).set({
                    id,
                    general: {
                        ...fields
                    }
                })
            })
            }>
            <div className="general-container">
                <div>
                    <Field
                        name="id"
                        component={FormField}
                        type="text"
                        label="Referentie nummer"
                        required
                    />
                </div>
                    <div>
                        <Field
                            name="title"
                            component={FormField}
                            type="text"
                            label="Naam personage"
                            placeholder="vb. Gerard Vanoosthuyze"
                            required
                        />
                    </div>
                    <div>
                        <Field
                            name="summary"
                            component={FormField}
                            type="text"
                            label="Korte omschrijving"
                            placeholder=""
                            required
                        />
                    </div>
                    <div>
                        <Field
                            name="source"
                            component={FormField}
                            type="text"
                            label="Bron"
                            placeholder=""
                            required
                        />
                    </div>
                    <div>
                        <Field
                            name="dayOfBirth"
                            component={FormField}
                            type="text"
                            label="Geboorte datum"
                            placeholder="vb. 24/05/1905"
                            required
                        />
                    </div>
                    <div>
                        <Field
                            name="dayOfDeath"
                            component={FormField}
                            type="text"
                            label="Datum van overlijden"
                            placeholder="vb. 21/04/1963"

                            required
                        />
                    </div>
                    <div>
                        <Field
                            name="age"
                            component={FormField}
                            type="number"
                            label="Leeftijd"
                            placeholder="vb. 23"
                            required
                        />
                    </div>
                    <div>
                        <Field
                            name="level"
                            component={FormField}
                            type="text"
                            label="Geschikte leerjaar"
                            placeholder="vb. 3-4e leerjaar"
                            required
                        />
                    </div>
                    <div>
                        <Field
                            name="difficulty"
                            component="select"
                            type="text"
                            label="Moeilijkheidsgraad"
                            required
                        >
                        <option value="easy">Gemakkelijk</option>
                        <option value="rather-easy">Eerder gemakkelijk</option>
                        <option value="intermediary">Gemiddeld</option>
                        <option value="rather difficult">Eerder moeilijk</option>
                        <option value="difficult">Moeilijk</option>
                        </Field>

                    </div>
                    <div>
                        <Field
                            name="creationTips"
                            component={FormField}
                            type="text"
                            label="Knutseltips"
                            placeholder="vb. monument maken in plasticine"
                            required
                        />
                    </div>
                    <div>
                        <Field
                            name="link"
                            component={FormField}
                            type="text"
                            label="Linked website"
                            placeholder="vb. www.museum.be"
                            required
                        />
                    </div>
                    <div>
                        <Field
                            name="nationality"
                            component={FormField}
                            type="text"
                            label="Nationaliteit"
                            placeholder="vb. Belg"
                            required
                        />
                    </div>
                    <div>
                        <Field
                            name="copyright"
                            component={FormField}
                            type="checkbox"
                            label="Copyright"
                        />
                    </div>

                    <Button type="submit" disabled={pristine || submitting}>Voeg een verhaal toe</Button>

                <Button onClick={logout}>Uitloggen</Button>
            </div>
            </form>
            <Footer />
        </div>
        );
    };
};

export default reduxForm({ form: 'addStories'})(AddStories);
