import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// We need to transform this format into 'example' below
//
// {  
//   "port_config": {
//     "wan": "internet", // port is configured for connecting to modem / internet router
//     "eth0.1": "extender_node", // port is configured for connecting to extender node
//     "eth0.2": "extender_node",
//     "eth0.3": "private", // port is configured to be on the private network
//     "eth0.4": "public" // port is configured to be on the public network

//   },
//   "link_status": {
//     "wan": "tunneled", // we are connected to the internet (and exit node)
//     "eth0.1": "plugged", // something is plugged into ethernet port 1
//     "eth0.2": "plugged",
//     "eth0.3": "plugged",
//     "eth0.4": "unplugged"

//   },
//   "clients": { // clients (not other nodes) that are directly connected to this node
//     "private_2_4ghz_count": 3, // three clients connected on the private 2.4 GHz AP
//     "private_5ghz_count": 2,
//     "private_lan_count": 4, // four clients connected to the private lan (via ethernet)
//     "public_2_4ghz_count": 10,
//     "public_5ghz_count": 5,
//     "public_lan_count": 0,
//   },
//   "babeld": {
//     "node_count": 29, // total number of nodes in the entire mesh network
//     "neighbors_2_4ghz_count": 2, // number of direct neighbors connected via home nodes built-in 2.4 GHz radio
//     "neighbors_5ghz_count": 3,
//     "neighbors_ethernet_count": 0, // number of direct neighbors connected via ethernet (not counting the extender nodes themselves)
//     "extender_nodes": {
//       "vlan1": true, // extender node on port 1 is connected to at least one other mesh node
//       "vlan2": false, // no extender node on port 2 or the extender node on port 2 can't see any other mesh nodes
//       "vlan3": false,
//       "vlan4": false
//     }
//   },
//   "notdhcpserver": { // in-depth extender-node info
//     {
//       "has_switch": true, // the router has multiple ethernet interfaces connected through an internal switch
//       "interfaces": [
//         {
//           "ifname": "eth0.1", // this object has info on ethernet port 1
//           "vlan": 1, // we map vlans to ethernet port numbers. not super relevant for UI
//           "ip": "100.64.2.2", // The IP of the connected extender node. This is set even if no extender node is connected.
//           "netmask": 26, // netmask for above IP
//           "time_since_last_contact": 43, // time in ms since an extender node was seen on this port
//           "state": "connected" // an extender node is connected
//         },
//         {
//           "ifname": "eth0.2",
//           "vlan": 2,
//           "ip": "100.64.2.3",
//           "netmask": 26,
//           "time_since_last_contact": -1, // negative numbers means no extender node has been connected since last boot
//           "state": "unplugged"
//         }
//       ]
//     }
//   }
// }

let example = {
  ports: {
    0: {
      name: "WAN port",
      connectionIcon: "internetTunnel",
      deviceIcons: [
        {
          type: "meshExit"
        }
      ]
    },
    1: {
      name: "port 1",
      connectionIcon: "nanoBeam",
      deviceIcons: [
        {
          type: "client",
          network: "Public",
          number: 2
        }
      ]
    },
    2: {
      name: "port 2",
      connectionIcon: "nanoBeam",
      deviceIcons: [
        {
          type: "localmesh",
          internet: true
        }
      ]
    },
    3: {
      name: "port 3",
      connectionIcon: "publicEthernet",
      deviceIcons: [
        {
          type: "client",
          network: "Public",
          number: 2
        }
      ]
    },
    4: {
      name: "port 4",
      connectionIcon: "privateEthernet",
      deviceIcons: [
        {
          type: "client",
          network: "Private",
          number: 1
        }
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
