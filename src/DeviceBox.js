import React from 'react'

import client from './device-icons/client.svg'
import localmesh from './device-icons/localmesh.svg'
import localmesh_no_internet from './device-icons/localmesh_no_internet.svg'
import mesh_exit from './device-icons/mesh_exit.svg'
import unknown_device from './device-icons/unknown_device.svg'

let icons = {
    mesh_exit: {
        file: mesh_exit,
        title: "Mesh Exit Server"
    },
    unknown_device: {
        file: unknown_device,
        title: "Unknown Device"
    },
}

function renderIcon (icon) {
    if (icon.type === "localmesh") {
        if (icon.internet) {
            return {
                file: localmesh,
                title: "Local Mesh"
            }
        } else {
            return {
                file: localmesh_no_internet,
                title: "Local Mesh, no Internet"
            }
        }
    }

    if (icon.type === "client") {
        return {
            file: client,
            title: `${icon.number} ${icon.network} Clients`
        }
    }
    
    else {
        return icons[icon.type]
    } 
}

export function DeviceBox ({ deviceIcons }) {
    return (
        <div style={{
            width: 200,
            textAlign: "center",
        }}>
        {
            deviceIcons.map((deviceIcon, i) => {
                let icon = renderIcon(deviceIcon)

                return <div key={i} style={{
                    width: 100,
                    height: 100,
                    display: "inline-block"
                }}>
                    <img style={{ position: "absolute" }} src={icon.file} />
                    { icon.title }
                </div>
            })
        }
        </div>
    )
}