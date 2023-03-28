import React from 'react'
import { Button } from 'react-bootstrap'
import './Send.css'

function Send() {
    return (
        <div className='button-area'>
            <Button style={{
                width: "60px",
                height: "50px",
                marginRight: "10px"
            }}>Send</Button>
        </div>
    )
}

export default Send