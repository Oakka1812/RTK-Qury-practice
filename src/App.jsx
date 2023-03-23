import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Blogs from './Blogs'
import Create from './Create'
import Detail from './Detail'
import Edit from './Edit'

const App = () => {
  return (
    <div className='container'>
     <Routes>
      <Route path="/" element={<Blogs/>}/>
      <Route path="/blogs/:id" element={<Detail/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
     </Routes>
    </div>
  )
}

export default App