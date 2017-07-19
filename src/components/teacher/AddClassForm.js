import React from 'react';
import Button from '../button/Button';
import { reduxForm, Field } from 'redux-form';
import FormField from '../form/FormField';

class AddClassForm extends React.Component {
  render() {
    const { error, pristine, handleSubmit, submitting, addClass } = this.props;
    return (
      <form
        onSubmit={handleSubmit(({ name }) => {
          addClass({ name });
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
        {error &&
          <div>
            {error}
          </div>}
        <Button type="submit" disabled={pristine || submitting}>
          Voeg toe
        </Button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'add_class'
})(AddClassForm);
