import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let example = {
  ports: {
    0: {
      portName: "WAN port",
      connectionIcon: "internetTunnel",
      cableType: "tunnel",
      deviceIcons: [
        {
          type: "meshExit"
        }
      ]
    },
    3: {
      portName: "port 3",
      connectionIcon: "publicEthernet",
      cableType: "public",
      deviceIcons: [
        {
          type: "client",
          network: "Public",
          number: 3
        },
                {
          type: "client",
          network: "Public",
          number: 3
        },
                {
          type: "client",
          network: "Public",
          number: 3
        },
      ]
    }
  },
  radios: {
    0: {
      name: "2.4ghz radio", 
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
      name: "5ghz radio",
      deviceIcons: []
    }
  }
}

ReactDOM.render(
  <App { ...example }/>,
  document.getElementById('root')
);
