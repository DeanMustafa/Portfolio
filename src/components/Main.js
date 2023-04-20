import React from 'react'
import HTML from "../imgs/html.png"
import CSS from "../imgs/css.png"
import JS from "../imgs/js.png"
import REACT from "../imgs/react.png"
import MainPicNo1 from "../imgs/main-1.png"
import YT from "../imgs/YT.png"
import Insta from "../imgs/insta.png"
import LinkedIn from "../imgs/linkedin.png"
import GitHUB from "../imgs/gt.png"

function Main() {
    return (
        <div className='main'>
            <div className='intro'>
                <div className='context'>
                    <span className='uniqueText'>HELLO!</span>
                    <h1>I'm <span className='uniqueText'>Fakhriddin Mustafaev</span> | <span className='uniqueText'>Dean</span></h1>
                    <p>A Self-taught Front-End Developer</p>
                    <div className='btns'>
                        <button className='btn first'>HIRE ME!</button>
                        <button className='btn second'>MY WORKS</button>
                    </div>
                </div>
                <img src={MainPicNo1} alt='picture' />
            </div>


            <div className='skills'>
                <div className='html'>
                    <img src={HTML} alt="html" />
                </div>
                <div className='css'>
                    <img src={CSS} alt="css" />
                </div>
                <div className='javascript'>
                    <img src={JS} alt="javascript" />
                </div>
                <div className='react'>
                    <img src={REACT} alt="react" />
                </div>
            </div>
            <div className='links'>
                <div className='social'>
                    <li><a href='https://www.youtube.com/channel/UC7oTYwf-cd89kp49ME7U28Q'><img src={YT} /></a></li>
                    <li><a href='#'><img src={Insta} /></a></li>
                </div>
                <button className='cont'>Contact</button>
                <div className='accounts'>
                    <li><a href='https://www.linkedin.com/in/fakhriddin-mustafaev-855a46225/'><img src={LinkedIn} /></a></li>
                    <li><a href='https://github.com/DeanMustafa'><img className='LN' src={GitHUB} /></a></li>
                </div>
            </div>



        </div>
    )
}

export default Main