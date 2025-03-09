import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import InputName from './components/InputName'
import './App.css'


function App() {

  return (
    <>
      <div>
        <Header />
        <MainContent />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </div>
      <WelcomeMessage />
      <Counter />
      <InputName/>
      <Footer />

    </>
  )
}

export default App
