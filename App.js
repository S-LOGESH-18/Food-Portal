import './App.css'
import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import SignInPage from './Components/LoginRegister/Login1'
import AppFront from './Components/BeforeLogin/Appfront'
import BriyaniMenu from './Components/FOODItems/Briyani/Briyani'
import MainPage from './Components/AfterLogin/Home'
function App() {


  return (
    <>
        <Routes>
          <Route path='/' element={<AppFront/>}/>
          <Route path='/Login' element={<SignInPage/>}/>
          <Route path='/Main' element={<MainPage/>} />
          <Route path='/Briyani' element={<BriyaniMenu/>} />
        </Routes>
    </>
  )
}

export default App
