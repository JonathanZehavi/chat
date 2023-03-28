import { useState } from 'react'
import './Register.css'
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import axios from 'axios';


function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function registerUser(email: string, password: string) {
        axios.post("http://84.229.137.22:5656/register", { email, password })
            .then(response => {
                let data = response.data
                console.log(data);
            }).catch(error => alert(error.message))
    }



    let onChangeEmail = (e: any) => {
        setEmail(e.target.value)
    }
    let onChangePassword = (e: any) => {
        setPassword(e.target.value)
    }

    let onSubmit = () => {
        console.log(email, password);
        registerUser(email, password)
    }

    return (
        <div className='container'>
            <div className='register-container'>
                <h1 className='title'>Register</h1>
                <div className='form'>
                    <Form>
                        <div className='email-section'>
                            <FormGroup style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                                <FormLabel style={{ fontSize: "20px" }}>Email Address</FormLabel>
                                <FormControl onChange={onChangeEmail} style={{ width: "100%" }} type='email' placeholder='Enter Your Email Address' />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </FormGroup>
                        </div>
                        <div className='password-section'>
                            <FormGroup style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                                <FormLabel style={{ fontSize: "20px" }}>Password</FormLabel>
                                <FormControl onChange={onChangePassword} style={{ width: "100%" }} type='password' placeholder='Enter Your Password' />
                            </FormGroup>
                        </div>
                        <div className='register-area'>
                            <Button onClick={onSubmit} style={{ fontSize: "15px", fontWeight: "bold", width: "80px", margin: "10px" }}>Register</Button>
                        </div>
                    </Form>
                </div>
            </div >
        </div>
    )
}

export default Register