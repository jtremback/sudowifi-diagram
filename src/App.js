import React from 'react'
import './App.css'
import { Router } from './router.js'

function App() {
  return (
    <div className="App">
      <Router connections={{0: true, 3: true}}/>
    </div>
  )
}

export default App
