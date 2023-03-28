import { useState } from 'react'
import './Login.css'
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginUser(email: string, password: string) {
        axios.post("http://84.229.137.22:5656/login", { email, password },
            {
                withCredentials: false,
                headers: {
                    'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': 'POST',
                }
            }
        ).then(response => {
            let data = response.data
            console.log(data);
        }).catch(error => alert(error.message))
    }

    // async function loginUser(email: string, password: string) {
    //     const response = await
    //         fetch("http://84.229.137.22:5656/login",
    //             {
    //                 credentials: 'include',
    //                 method: "POST",
    //                 headers: { "Content-Type": "application/json" },
    //                 body: JSON.stringify({ email, password })
    //             }
    //         )
    //     const data = await response.json()
    //     return data
    // }


    let onChangeEmail = (e: any) => {
        setEmail(e.target.value)
    }

    let onChangePassword = (e: any) => {
        setPassword(e.target.value)
    }

    let onLogin = () => {
        loginUser(email, password)
        console.log("seccess");
    }


    return (
        <div className='container'>
            <div className='login-container'>
                <h1 className='title'>Login</h1>
                <div className='form'>
                    <Form>
                        <div className='email-section'>
                            <FormGroup style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                                <FormLabel style={{ fontSize: "20px" }}>Email Address</FormLabel>
                                <FormControl onChange={onChangeEmail} style={{ width: "100%" }} type='email' placeholder='Enter Your Email Address' />
                            </FormGroup>
                        </div>
                        <div className='password-section'>
                            <FormGroup style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                                <FormLabel style={{ fontSize: "20px" }}>Password</FormLabel>
                                <FormControl onChange={onChangePassword} style={{ width: "100%" }} type='password' placeholder='Enter Your Password' />
                            </FormGroup>
                        </div>
                        <div className='login-area'>
                            <Button onClick={onLogin} style={{ fontSize: "15px", fontWeight: "bold", width: "80px", margin: "10px" }}>Login</Button>
                        </div>
                    </Form>
                </div>
            </div >
        </div>
    )
}

export default Login