import React from 'react'
import './App.css'
import { Router } from './router.js'
import { ConnectionBox, DeviceBox } from './connectionBox.js'

function App() {
  return (
    <div className="App">
      <Router connections={{ 0: false, 1: false, 2: false, 3: true, 4: false }}/>
      <div style={{
        position: "absolute",
        top: 0
      }}>
        <ConnectionBox/>
      </div>
    </div>
  )
}

export default App
