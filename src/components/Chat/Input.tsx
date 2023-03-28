import React, { useState } from 'react'
import { Form, FormControl, FormGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux/es/exports';
import { ActionType } from '../../Redux/action-type';

function Input() {

    let dispatch = useDispatch();

    const [message, setMessage] = useState<string>("");

    let onInputChange = (e: any) => {
        setMessage(e.target.value)
    }

    let onSubmit = (e: any) => {
        e.preventDefault();
        console.log("success");
        dispatch({ type: ActionType.getMessage, payload: message })
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <FormGroup style={{
                    width: "341px", padding: "5px", margin: "7px"
                }}>
                    <FormControl onChange={onInputChange} style={{ display: "flex", width: "100%", height: "50px", fontSize: "20px" }} />
                </FormGroup>
            </Form>
        </div>
    )
}

export default Input