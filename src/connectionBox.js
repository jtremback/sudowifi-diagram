import React from 'react'
import { DeviceBox } from './DeviceBox.js'

import internet_tunnel from './connection-icons/internet_tunnel.svg'
import nano_bridge from './connection-icons/nano_bridge.svg'
import nano_beam from './connection-icons/nano_beam.svg'
import nano_station from './connection-icons/nano_station.svg'
import public_ethernet from './connection-icons/public_ethernet.svg'
import private_ethernet from './connection-icons/private_ethernet.svg'

import { labelText } from './styles.js'

let icons = {
    internet_tunnel: {
        file: internet_tunnel,
        title: "Internet Tunnel"
    },
    nano_bridge: {
        file: nano_bridge,
        title: "Ubiquiti NanoBridge"
    },
    nano_beam: {
        file: nano_beam,
        title: "Ubiquiti NanoBeam"
    },
    nano_station: {
        file: nano_station,
        title: "Ubiquiti NanoStation"
    },
    public_ethernet: {
        file: public_ethernet,
        title: "Public Ethernet"
    },
    private_ethernet: {
        file: private_ethernet,
        title: "Private Ethernet"
    },
}

export function ConnectionBox ({ deviceIcons, connectionIcon }) {
    debugger
  return (
      <div style={{ position: "relative" }}>
        <img style={{ position: "absolute" }} src={icons[connectionIcon].file} />
        <div style={{ position: "absolute", top: 130, width: 200, textAlign: "center", ...labelText }}>{icons[connectionIcon].title}</div>
        <div style={{ position: "absolute", top: 200 }}>
            <DeviceBox deviceIcons={deviceIcons} />
        </div>
      </div>
  )
}
