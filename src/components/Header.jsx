import React from 'react'
import { HEADER_LOGO } from '../constants/constants'

const Header = () => {
    return (
        <div className='px-8 py-2 bg-gradient-to-b from-black z-20'>
            <img className='w-30 h-20' src={HEADER_LOGO} alt='logo' />
        </div>
    )
}

export default Header