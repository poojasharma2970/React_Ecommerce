import React, { useState } from 'react';
import Register from './Screen/Register';
import SignupFormSuccess from './SignupFormSuccess';

const Form = () => {

    const [formIsSubmitted, setFormSubmitted] = useState(false);

    const submitForm = () => {
        setFormSubmitted(true);
    };

    return (
        <div>
            { !formIsSubmitted ? <Register  submitForm={submitForm} /> : <SignupFormSuccess />}
        </div>
    );
};

export default Form;