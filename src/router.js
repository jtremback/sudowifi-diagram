import React from 'react'

import router from './tp-link/router.svg'

import cable0 from './tp-link/cable0.svg'
import cable1 from './tp-link/cable1.svg'
import cable2 from './tp-link/cable2.svg'
import cable3 from './tp-link/cable3.svg'
import cable4 from './tp-link/cable4.svg'

let cables = {
    0: cable0,
    1: cable1,
    2: cable2,
    3: cable3,
    4: cable4,
}

export function Router ({ports}) {
    return (
        <div style={{ position: "relative" }}>
            <img style={{
                position: "absolute"
            }} src={router} />

            {
                Object.keys(ports).map(key => <img style={{
                    position: "absolute",
                    top: 234
                }} src={cables[key]} />)
            }
        </div>
    ) 
}

Router.propTypes = {
    ports: React.PropTypes.object
}
            // <img style={{
            //     position: "absolute",
            //     top: 234
            // }} src={cable1} />
            // <img style={{
            //     position: "absolute",
            //     top: 234
            // }} src={cable2} />
            // <img style={{
            //     position: "absolute",
            //     top: 234
            // }} src={cable3} />
            // <img style={{
            //     position: "absolute",
            //     top: 234
            // }} src={cable4} />