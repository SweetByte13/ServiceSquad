import React, { useEffect, useState } from "react";
import { Formik } from 'formik';
import { Button, Container } from '@mui/material';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';

function LoginForm({ onLogin, setUser }) {
    
    let LoginSchema = yup.object().shape({
        username: yup.string().required('username required').min(6),
        password_hash: yup.string().required('password required').min(8)
    })

    const handleSubmit = (values) => {
        console.log("form submitted")
        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(values)
        }).then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => {
                    setUser(user)
                })
            }
        })
    }

    let initialValues = {
        username: '',
        password_hash: ''
    }

    return (
        <Container>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, values, handleChange }) => (
                    <Form className="login-form" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control 
                                type="username" 
                                //bootstrap "type" was email- will "username make a difference?"
                                id="username"
                                placeholder="Enter username"
                                name="username"
                                required value={values.username}
                                onChange={handleChange} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password:</Form.Label>
                            {/* //htmlFor='password_hash' */}
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                id='password_hash'
                                name='password_hash'
                                value={values.password_hash}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button className="login-button" type="submit">Log In</Button>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}
export default LoginForm;