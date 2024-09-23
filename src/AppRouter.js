import React from 'react'
import {BrowserRouter, Route, Routes }from 'react-router-dom'
import App from './App'
import Add from './Add'
import Edit from './Edit'
import Home from './Home'

function  AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
            <Route path='/app' element={<App/>} />
            <Route path='create' element={<Add/>} />
            <Route path='update/:id' element={<Edit/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
