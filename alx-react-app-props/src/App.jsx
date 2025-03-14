import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/home';
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
    <BrowserRouter>
    <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />

    </Routes>
    </BrowserRouter>
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
