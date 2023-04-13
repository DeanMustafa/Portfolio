import React, { useContext } from 'react'
import "./App.css"
import Nav from './components/Nav';
import Main from './components/Main';

export const Context = React.createContext();

function Portfolio() {


  return (
    <Context.Provider>
      <div className='app'>
        <Nav />
        <Main />
      </div>
    </Context.Provider>
  )
}

export default Portfolio