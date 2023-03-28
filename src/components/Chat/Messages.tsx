import React from 'react'
import { useSelector } from 'react-redux';
import { AppState } from '../../Redux/app-state'
import './Messages.css'

function Messages() {

    let message: string = useSelector((state: AppState) => state.message);
    return (
        <div className='messages-container'>
            {message !== "" && <p className='single-message'>
                {message}
            </p>}

        </div>
    )
}

export default Messages