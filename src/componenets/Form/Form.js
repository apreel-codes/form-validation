import React, { useState } from 'react';
import './Form.css';
import Button from '../Button/Button';

const Form = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    const emailHandler = (e) => {
        setEmail(e.target.value);
        console.log(email);
        setError('');
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const validEmail = validateEmail(email);

    const submitEmail = (e) => {
        e.preventDefault();
        if(!email){
            setError('Kindly provide an email address');
            return;
        }
        if(validEmail === false) {
            setError('Kindly provide a valid email address');
            return;
        }

        setEmail('');
    }


    return (
        <div className='form-page text-center w-[88%] mx-auto'>
            <img className='w-15 h-5 logo mx-auto' src='../images/logo.svg' />

            <div>
                <h1>We are launching <span>soon!</span></h1>
                <p>Subscribe and get notified</p>
            </div>
            
            <form noValidate onSubmit={submitEmail} className='form'>
                <div className='input-group'>
                    <input 
                        className= {error ? 'input-error' : 'input'}
                        value={email}
                        required
                        onChange={emailHandler}
                        placeholder='Your email address...'
                    /><br />
                    { error && 
                        <span className='error'>{error}</span>
                    }
                </div>

                <div className='form-button'>
                    <Button />  
                </div>
            </form>
            
            { email && 
                <p className='italic email'>Email address: {email}...</p>
            }

            <img className='image' src='../images/illustration-dashboard.png'/>
        </div>
    )
}

export default Form;