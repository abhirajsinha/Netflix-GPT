import React, { useRef, useState } from 'react';
import Header from './Header'
import { BACKGROUND_IMAGE } from '../constants/constants';
import { Button } from '@mui/material';
import { validateInputs } from '../utils/validations';

const Login = () => {
    const [toggle, setToggle] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [isSignUpForm, setIsSignUpForm] = useState(true);

    const email = useRef(null);
    const password = useRef(null)

    const HandleButtonClick = () => {
        // validate         
        const message = validateInputs(email.current.value, password.current.value)
        console.log(message)
        setErrorMessage(message);
        if (message) return

        if (!isSignUpForm) {

        } else {

        }
    }

    return (
        <div className='w-[100%] h-[100%]' style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}>
            <Header />
            <div className='bg-gradient-to-b from-black h-[500px] w-3/12 m-auto min-h-[407px]'>
                <div className='pt-10'>
                    <h1 className='text-white ml-10 pb-6 font-bold text-4xl'>{toggle ? 'Sign Up' : 'Login'}</h1>
                    <form className='pt-6'>
                        {toggle && <input type='text' placeholder='Full Name' className='p-2 ml-10 mb-5 w-[80%] rounded-md bg-gray-600 text-white' />}
                        <input type='email' ref={email} placeholder='Email Address' className='p-2 ml-10 w-[80%] rounded-md bg-gray-600 text-white' />
                        <input type='password' ref={password} placeholder='Password' className='p-2 ml-10  mt-5 w-[80%] rounded-md bg-gray-600 text-white' />
                        <p className="text-red-500 font-bold text-lg px-10 py-2">{errorMessage}</p>
                    </form>
                    <Button onClick={HandleButtonClick} style={{ marginTop: '20px', width: '80%', marginLeft: '40px' }} variant='contained' color='error'>{toggle ? 'Sign Up' : 'Login'}</Button>
                    <div style={{ cursor: 'pointer' }} className=' flex p-10' onClick={(prev) => setToggle((prev) => !prev)}>
                        <p className=' text-gray-200'>New to Netflix? Sign Up Now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login