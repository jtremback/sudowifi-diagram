import React from 'react'

export function ConnectionBox ({ devices }) {
  return (
      <div style={{ position: "relative" }}>
        <div style={{
            backgroundColor: "rgba(0,0,254,.5)",
            width: 200,
            height: 300
        }}></div>
            <div style={{
                position: "absolute",
                top: 200,
                width: 200,
            }}>
                <DeviceBox 
                    devices={[true,true,true,true]}
                ></DeviceBox>
            </div>
      </div>
  )
}

export function DeviceBox ({devices}) {
    return (
        <div style={{
            // display: "flex",
            // flexWrap: "wrap",
        }}>
        {
            devices.map(device => (
                <div style={{
                    background: "rgba(254,0,0,.5)",
                    width: 100,
                    height: 100,
                    display: "inline-block"
                }}></div>
            ))
        }
        </div>
    )
}