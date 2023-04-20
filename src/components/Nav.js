import React from 'react'
import { GrHomeOption } from 'react-icons/gr'

function Nav() {
    return (
        <div className='nav'>
            <div className='nav_1'>
            <li><a href='about'>Projects</a></li>
            <li><a href='skills'>Skills</a></li>
            </div>
            <li><a href='/'>DEAN</a></li>
            <div className='nav_2'>
            <li><a href='contact'>Contact</a></li>
            <li><a href='contact'>Resume</a></li>
            </div>
        </div>
    )
}

export default Nav