import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/MainContent'
import './App.css'


function App() {

  return (
    <>
      <div>
        <Header/>
        <Main />
      </div>
      <WelcomeMessage />
      <Footer />
    </>
  )
}

export default App
