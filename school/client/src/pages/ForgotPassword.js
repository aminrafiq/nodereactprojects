import { Link } from 'react-router-dom';
import { useState } from 'react';

import InputField from "../components/InputField";

export default function ForgotPassword() {
    const state = useState({
        email: ""
    });

    const submitForm = (e) => {
        e.preventDefault();
        console.log(e.target.fullname.value)

    }

    return (
        <form onSubmit={submitForm}>
            <InputField input={{ type: 'email', id: 'email', name: 'email', defaultValue: state.email }} />
            <Link to='/'>Login</Link>
            <input type="submit" />
        </form>
    );
}
