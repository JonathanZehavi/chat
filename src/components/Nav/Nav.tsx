import React from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <div className='front-page-container'>
            <h1>Welcome to the Chat</h1>
            <div className='links-area'>
                <Link style={{ fontSize: "20px", fontWeight: "bold", textDecoration: "none" }} to={'/login'}>Login</Link>
                <Link style={{ fontSize: "20px", fontWeight: "bold", textDecoration: "none" }} to={'/register'}>Register</Link>
            </div>
        </div>
    )
}

export default Nav