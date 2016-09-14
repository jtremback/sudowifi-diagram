import React from 'react'
import { Router } from './router.js'
import { ConnectionBox, DeviceBox } from './connectionBox.js'

function App({ ports, radios }) {
  return (
    <div style={{
      width: 1000,
      position: "relative"
    }}>
      <Router connections={{
        0: ports[0],
        1: ports[1],
        2: ports[2],
        3: ports[3],
        4: ports[4]
      }}/>
      
      { radios[0] &&
      <div style={{
        position: "absolute",
        top: 0
      }}>
          <DeviceBox 
            { ...radios[0] }
          ></DeviceBox>
      </div>
      }

      { radios[1] &&
      <div style={{
        position: "absolute",
        top: 0,
        left: 800,
      }}>
          <DeviceBox 
            { ...radios[1] }
          ></DeviceBox>
      </div>
      }

      { ports[0] &&
      <div style={{
        position: "absolute",
        top: 300,
        left: 0,
      }}>
        <ConnectionBox
          { ...ports[0] }
        ></ConnectionBox>
      </div>
      }

      { ports[1] &&
      <div style={{
        position: "absolute",
        top: 300,
        left: 200,
      }}>
        <ConnectionBox
          { ...ports[1] }
        ></ConnectionBox>
      </div>
      }

      { ports[2] &&
      <div style={{
        position: "absolute",
        top: 300,
        left: 400,
      }}>
        <ConnectionBox
          { ...ports[2] }
        ></ConnectionBox>
      </div>
      }

      { ports[3] &&
      <div style={{
        position: "absolute",
        top: 300,
        left: 600,
      }}>
        <ConnectionBox
          { ...ports[3] }
        ></ConnectionBox>
      </div>
      }
      
      { ports[4] &&
      <div style={{
        position: "absolute",
        top: 300,
        left: 800,
      }}>
        <ConnectionBox
          { ...ports[4] }
        ></ConnectionBox>
      </div>
      }

    </div>
  )
}

export default App
