import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Detail, Home } from '../pages'

const Navigator = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Detail' element={<Detail/>}/>
    </Routes>
  )
}

export default Navigator