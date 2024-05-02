import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LoginCard = () => {
    const [name, setName] = useState('');
    const [nameTouched, setNameTouched] = useState(false);
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [usernameError, setUsernameError] = useState('');

    // Scroll to the top on component mount
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    function checkUsername() {
        if (name.length === 0) {
            setUsernameError('Please enter username.');
        } else if (name !== 'admin') {
            setUsernameError('Incorrect username.');
        } else {
            setUsernameError('');
        }
    }

    function checkPassword() {
        if (password.length === 0) {
            setErrorMessage('Password input cannot be empty.');
        } else if (password !== 'password') {
            setErrorMessage('The password is incorrect.');
        } else {
            setErrorMessage('');
        }
    }

    function validateForm() {
        checkUsername();
        checkPassword();
    }

    const nameIsValid = name === 'admin';
    const isSubmitDisabled = password.length === 0 || password !== 'password' || !nameIsValid;

    let nameErrorClass = 'error ', nameClass = '';
    if (!nameTouched) {
        nameErrorClass += 'hidden';
    } else {
        nameErrorClass += nameIsValid ? 'hidden' : 'invalid';
        nameClass += nameIsValid ? 'valid' : 'invalid';
    }

    return (
        <div className='loggin-container'>
            <div className="header">
                <div className="text">Login</div>
                <div className="underline">Only for employees*</div>
            </div>
            <div className="input-frame">
                <div className="input">
                    <input type="text" placeholder="Username" required
                        className={nameClass}
                        value={name}
                        onChange={event => setName(event.target.value)}
                        onBlur={() => setNameTouched(true)}
                    />
                    <p className={nameErrorClass}>{usernameError} &nbsp;</p>
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                    <p className="password-error">{errorMessage}</p>
                </div>
            </div>
            <div className="submit-container">
                <button className="submit" disabled={isSubmitDisabled} onClick={validateForm}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default LoginCard;
