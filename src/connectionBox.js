import React from 'react'

export function ConnectionBox ({ deviceIcons, connectionIcon }) {
  return (
      <div style={{ position: "relative" }}>
        <div style={{
            backgroundColor: "rgba(0,0,254,.5)",
            width: 200,
            height: 300
        }}>{ connectionIcon }</div>
            <div style={{
                position: "absolute",
                top: 200,
            }}>
                <DeviceBox 
                    deviceIcons={deviceIcons}
                ></DeviceBox>
            </div>
      </div>
  )
}

export function DeviceBox ({ deviceIcons }) {
    return (
        <div style={{
            width: 200,
            textAlign: "center",
        }}>
        {
            deviceIcons.map((deviceIcon, i) => (
                <div key={i} style={{
                    background: "rgba(254,0,0,.5)",
                    width: 100,
                    height: 100,
                    display: "inline-block"
                }}>
                    { deviceIcon.type }
                </div>
            ))
        }
        </div>
    )
}