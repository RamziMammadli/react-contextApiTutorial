import React from 'react'
import Header from '../components/Header'
import { useTheme } from '../context/context'


const Home = () => {

    const {theme, toggleTheme} = useTheme()
    
    //SIMPLE const {db} = useContext(MainContext)    ----importlara diqqet , db ekrana yazdirin

  return (
    <div style={{backgroundColor:theme === 'light' ? 'white' : 'black', color:theme === 'light' ? 'black' : 'white'}}>
        <button onClick={toggleTheme}>Change Mode</button>
        <p>Alo</p>
        <p>Alo</p>
        <p>Alo</p>
        <p>Alo</p>
        <p>Alo</p>
        <p>Alo</p>
        <p>Alo</p>
        <p>Alo</p>
        <p>Alo</p>
        <p>Alo</p>
        <p>Alo</p>
        <p>Alo</p>
        <Header />

    </div>
  )
}

export default Home