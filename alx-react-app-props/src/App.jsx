import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/home';
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import Footer from './components/Footer'
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';
import Counter from './components/Counter'
import InputName from './components/InputName'
import './App.css'


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

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
        <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
        </div>
      <WelcomeMessage />
      <Counter />
      <InputName/>
      <Footer />

    </>
  )
}

export default App
