import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../css/EditCard.css'

const LoginCard = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate(); 

    //scrolling to top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    const validateUsername = () => {
        if (name.length === 0) {
            setUsernameError('Please enter username.');
            return false;
        } else if (name !== 'admin') {
            setUsernameError('Incorrect username.');
            return false;
        }
        setUsernameError('');
        return true;
    };

    const validatePassword = () => {
        if (password.length === 0) {
            setPasswordError('Password input cannot be empty.');
            return false;
        } else if (password !== 'password') {
            setPasswordError('The password is incorrect.');
            return false;
        }
        setPasswordError('');
        return true;
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();  
        const isUsernameValid = validateUsername();
        const isPasswordValid = validatePassword();
        
        if (isUsernameValid && isPasswordValid) {
            navigate('/Edit');  
            console.log('Login successful');
        }
    };


    return (
        <div className='loggin-container'>
            <div className="header">
                <div className="text">Login</div>
                <div className="underline">Only for employees*</div>
            </div>
            <div className="input-frame">
                <div className="input">
                    <input type="text" placeholder="Username"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        onBlur={validateUsername}
                        className={usernameError ? 'invalid' : ''}
                    />
                    <p className="error">{usernameError}</p>
                </div>
                <div className="input">
                    <input type="password" placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        onBlur={validatePassword}
                        className={passwordError ? 'invalid' : ''}
                    />
                    <p className="error">{passwordError}</p>
                </div>
            </div>
            <div className="submit-container">
                
            <button className="submit" onClick={handleFormSubmit}>Login</button>

            
            </div>
        </div>
    );
}

export default LoginCard;
