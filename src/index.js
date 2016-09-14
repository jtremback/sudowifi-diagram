import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let example = {
  ports: {
    0: {
      connectionIcon: "internetTunnel",
      cableType: "tunnel",
      deviceIcons: [
        {
          type: "meshExit"
        }
      ]
    },
    2: {
      connectionIcon: "nanoBeam",
      cableType: "extender",
      deviceIcons: [
        {
          type: "client",
          network: "Public",
          number: 3
        },
        {
          type: "client",
          network: "Private",
          number: 12
        },
      ]
    }
  },
  radios: {
    0: {
      deviceIcons: [
        {
          type: "client",
          network: "public",
          number: 3
        },
        {
          type: "localmesh",
          internet: false
        }
      ]
    },
    1: {
      deviceIcons: []
    }
  }
}

ReactDOM.render(
  <App { ...example }/>,
  document.getElementById('root')
);
