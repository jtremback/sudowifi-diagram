import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let example = {
  ports: {
    0: {
      connectionIcon: "internet_tunnel",
      cableType: "tunnel",
      deviceIcons: [
        {
          type: "localmesh",
          internet: true
        }
      ]
    },
    2: {
      connectionIcon: "nano_beam",
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
          number: 3
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
