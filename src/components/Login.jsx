import React from 'react';
import Header from './Header'
import { BACKGROUND_IMAGE } from '../constants/constants';
import { Button } from '@mui/material';

const Login = () => {
    return (
        <div className='w-[100%] h-[100%]' style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}>
            <Header />
            <div className='bg-gradient-to-b from-black h-[500px] w-3/12 m-auto min-h-[407px]'>
                <div className='pt-10'>
                    <h1 className='text-white ml-10 pb-6 font-bold text-4xl'>Sign In</h1>
                    <form className=''>
                        <input type='email' placeholder='Enter your email' className='p-2 ml-10 w-[70%] rounded-md' />
                        <input type='password' placeholder='Enter your password' className='p-2 ml-10  mt-5 w-[70%] rounded-md' />
                    </form>
                    <Button style={{ marginTop: '15px', width: '70%', marginLeft: '40px' }} variant='contained' color='error'>Sign In</Button>
                </div>
            </div>
        </div>
    )
}

export default Login