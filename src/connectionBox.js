import React from 'react'
import { DeviceBox } from './DeviceBox.js'

import internetTunnel from './connection-icons/internetTunnel.svg'
import nanoBridge from './connection-icons/nanoBridge.svg'
import nanoBeam from './connection-icons/nanoBeam.svg'
import nanoStation from './connection-icons/nanoStation.svg'
import publicEthernet from './connection-icons/publicEthernet.svg'
import privateEthernet from './connection-icons/privateEthernet.svg'

import { labelText } from './styles.js'

let icons = {
    internetTunnel: {
        file: internetTunnel,
        title: "Internet Tunnel"
    },
    nanoBridge: {
        file: nanoBridge,
        title: "Ubiquiti NanoBridge"
    },
    nanoBeam: {
        file: nanoBeam,
        title: "Ubiquiti NanoBeam"
    },
    nanoStation: {
        file: nanoStation,
        title: "Ubiquiti NanoStation"
    },
    publicEthernet: {
        file: publicEthernet,
        title: "Public Ethernet"
    },
    privateEthernet: {
        file: privateEthernet,
        title: "Private Ethernet"
    },
}

export function ConnectionBox ({ deviceIcons, connectionIcon }) {
  return (
      <div style={{ position: "relative" }}>
        <img style={{ position: "absolute" }} src={icons[connectionIcon].file} />
        <div style={{ position: "absolute", top: 130, width: 200, ...labelText }}>{icons[connectionIcon].title}</div>
        <div style={{ position: "absolute", top: 200 }}>
            <DeviceBox deviceIcons={deviceIcons} />
        </div>
      </div>
  )
}
