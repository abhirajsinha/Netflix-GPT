import React from 'react'
import { HEADER_LOGO, NOTIFICATION_ICON, SEARCH_ICON, USER_ICON } from '../constants/constants'

const Header = () => {
    return (
        <div className='flex flex-row justify-between px-8 py-2'>
            <div className='w-[86%] flex flex-row items-center space-x-5'>
                <img className='w-25 h-12' src={HEADER_LOGO} alt='logo' />
                <ul className='flex flex-row space-x-4'>
                    <li>Home</li>
                    <li>Tv Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My Lists</li>
                    <li>Browse By Languages</li>
                </ul>
            </div>

            <div className='flex flex-row items-center justify-between w-[14%]'>
                <SEARCH_ICON />
                <button>Children</button>
                <button>
                    <NOTIFICATION_ICON />
                </button>
                <img src={USER_ICON} alt='users' />
            </div>
        </div>
    )
}

export default Header