import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import { BACKGROUND_IMAGE } from '../constants/constants';
import { Button } from '@mui/material';
import { validateInputs } from '../utils/validations';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';

const Login = () => {
    const [isSignUp, setisSignUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const navigate = useNavigate()
    const email = useRef(null);
    const password = useRef(null);
    const HandleButtonClick = () => {
        // validate         
        const message = validateInputs(email.current.value, password.current.value)
        setErrorMessage(message);
        if (message) return

        if (isSignUp) {
            // signup
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    navigate('/browse')
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ' - ' + errorMessage);
                });
        } else {
            // signin
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate('/')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ' - ' + errorMessage);
                });
        }
    }

    return (
        <div className='w-[100%] h-[100%]' style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}>
            <Header />
            <div className='bg-gradient-to-b from-black h-[500px] w-3/12 m-auto min-h-[407px]'>
                <div className='pt-10'>
                    <h1 className='text-white ml-10 pb-6 font-bold text-4xl'>{isSignUp ? 'Sign Up' : 'Login'}</h1>
                    <form className='pt-6'>
                        {isSignUp && <input type='text' placeholder='Full Name' className='p-2 ml-10 mb-5 w-[80%] rounded-md bg-gray-600 text-white' />}
                        <input type='email' ref={email} placeholder='Email Address' className='p-2 ml-10 w-[80%] rounded-md bg-gray-600 text-white' />
                        <input type='password' ref={password} placeholder='Password' className='p-2 ml-10  mt-5 w-[80%] rounded-md bg-gray-600 text-white' />
                        <p className="text-red-500 font-bold text-lg px-10 py-2">{errorMessage}</p>
                    </form>
                    <Button onClick={HandleButtonClick} style={{ marginTop: '20px', width: '80%', marginLeft: '40px' }} variant='contained' color='error'>{isSignUp ? 'Sign Up' : 'Login'}</Button>
                    <div style={{ cursor: 'pointer' }} className=' flex p-10' onClick={(prev) => setisSignUp((prev) => !prev)}>
                        <p className=' text-gray-200'>New to Netflix? Sign Up Now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login