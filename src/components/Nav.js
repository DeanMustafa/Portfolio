import React from 'react'
import { GrHomeOption } from 'react-icons/gr'

function Nav() {
    return (
        <div className='nav'>
            <li><a href='about'><p>Projects</p></a></li>
            <li><a href='skills'><p>Skills</p></a></li>
            <li><a className='home-btn' href='home'><GrHomeOption /></a></li>
            <li><a href='contact'><p>Contact</p></a></li>
            <li><a href='contact'><p>Resume</p></a></li>
        </div>
    )
}

export default Nav