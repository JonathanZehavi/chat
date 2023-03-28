import React from 'react'
import './Chat.css'
import Input from './Input'
import Messages from './Messages'
import Send from './Send'

function Chat() {
    return (
        <div className='chat-area'>
            <Messages />
            <div className='input-button-area'>
                <Input />
                <Send />
            </div>
        </div>
    )
}

export default Chat