import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let example = {
  ports: {
    0: {
      connectionIcon: "internet tunnel",
      cableType: "tunnel",
      deviceIcons: [
        {
          type: "local mesh",
          internet: true
        }
      ]
    },
    2: {
      connectionIcon: "Ubiqiti 380",
      cableType: "extender",
      deviceIcons: [
        {
          type: "public client",
          number: 3
        },
        {
          type: "private client",
          number: 3
        },
      ]
    }
  },
  radios: {
    0: {
      deviceIcons: [
        {
          type: "public client",
          number: 3
        },
        {
          type: "sudomesh",
          internet: true
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
