import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import HTML from "../imgs/html.png"
import CSS from "../imgs/css.png"
import JS from "../imgs/js.png"
import REACT from "../imgs/react.png"
import MainPicNo1 from "../imgs/main-1.png"

function Main() {
    return (
        <div className='main'>
            <div className='intro'>
                <h1>Hi there!</h1> {/* need a small animation with a emoji */}
                <img src={MainPicNo1} alt='picture'/>
            </div>
            <div className='sub-intro'>
                <h3>I'm a Front-end Developer</h3> {/* or just Dean needs to be added after name */}
                <p>Howdy! I'm Fakhriddin <span className='uniqueText'>Dean</span> Mustafaev. I'm a self-taght developer. I'm a self-taght developer. I'm a self-taght developer. I'm a self-taght developer. I'm a self-taght developer. I'm a self-taght developer. I'm a self-taght developer. I'm a self-taght developer. I'm a self-taght developer. I'm a self-taght developer.</p>
            </div>
            <div className='skills'>
                <div className='html'>
                    <p>HTML</p>
                    <img src={HTML} alt="html" />
                    <div className='stars'>
                        <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf /> <BsStar />
                    </div>
                </div>
                <div className='css'>
                    <p>CSS</p>
                    <img src={CSS} alt="css" />
                    <div className='stars'>
                        <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf /> <BsStar />
                    </div>
                </div>
                <div className='javascript'>
                    <p>JavaScript</p>
                    <img src={JS} alt="javascript" />
                    <div className='stars'>
                        <BsStarFill /> <BsStarFill /> <BsStarHalf /> <BsStar /> <BsStar />
                    </div>
                </div>
                <div className='react'>
                    <p>React</p>
                    <img src={REACT} alt="react" />
                    <div className='stars'>
                        <BsStarFill /> <BsStarFill /> <BsStar /> <BsStar /> <BsStar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main