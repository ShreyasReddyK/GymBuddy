import Home from './Home'
import Muscles from './Muscles'
import React from 'react'
import {Route, Routes} from "react-router-dom"

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/muscles/:type' element={<Muscles/>}/>
    </Routes>
  )
}

export default Pages