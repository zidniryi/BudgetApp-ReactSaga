import React from 'react'
import { Statistic } from 'semantic-ui-react'

function DisplayBalance({ label, value, color = "black", size = "tiny" }) {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{ textAlign: 'center' }}>
                {label}
            </Statistic.Label>
            <Statistic.Value>
                {isNaN(value) ? 0 : value}
            </Statistic.Value>
        </Statistic>
    )
}

export default DisplayBalance