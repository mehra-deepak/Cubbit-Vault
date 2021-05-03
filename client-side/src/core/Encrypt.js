import React from 'react'
import Base from './Base'
const Encrypt = (props) => {
    return (
        <div>
            <Base/>
            <label>FileID</label>
            <h2>{props.location.state.fileId}</h2>
            <label>Encryption Key</label>
            <h2>{props.location.state.key}</h2>
        </div>
    )
}

export default Encrypt
