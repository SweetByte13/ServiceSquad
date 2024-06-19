import React, { useEffect, useState } from "react";
import { Formik } from 'formik';
import { Button, Container } from '@mui/material';
import * as yup from 'yup';

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
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor='username'>Username:</label>
                        <input
                            id="username"
                            name="username"
                            placeholder='Username'
                            required value={values.username}
                            onChange={handleChange}
                        />
                        <label htmlFor='password_hash'>Password:</label>
                        <input
                            id='password_hash'
                            name='password_hash'
                            type='password'
                            placeholder='Password'
                            value={values.password_hash}
                            onChange={handleChange}
                        />
                        <Button className="button" type="submit">Submit</Button>
                    </form>
                )}

            </Formik>
        </Container>
    )
}
export default LoginForm;