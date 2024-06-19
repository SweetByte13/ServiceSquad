import React, {useState} from "react";
import { Formik } from 'formik';
import * as yup from 'yup'
import { Container } from '@mui/material';


function SignUpForm({ setUser }) {
    const [signup, setSignUp] = useState(true)

    const signupSchema = yup.object().shape({
        username: yup.string().min(1, 'Username too short!').max(15, 'Username too long!'),
        password: yup.string().min(5,'Password too short!').max(15, 'Password too long!'),
        passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Passwords must match!')
    })

    function toggleSignup() {
        setSignUp((currentSignup) => !currentSignup)
    }

    const handleSubmit = (values) => {
        const endpoint = signup ? '/signup' : '/login'
        fetch (endpoint, {
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
            }   else {
                alert('Invalid credentials')
            }
        })
    }

    return (
        <Container className="signup-container">
            <Formik
                initialValues={{ 
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    username: '', 
                    password: '', 
                    passwordConfirmation: '',
                    zipCode: '',
                    interests: '',
                    skills: '',
                    hoursWanted: ''
                }}
                // validationSchema={signup ? signupSchema : loginSchema}
                onSubmit={handleSubmit}
            >
                {({handleSubmit, values, handleChange}) => (
                    <form className='form' onSubmit={handleSubmit}>
                        <label htmlFor='username'>Username:</label>
                        <input
                            id='username'
                            name='username'
                            placeholder='Username'
                            required
                            value={values.username}
                            onChange={handleChange}
                        />

                        <label htmlFor='password'>Password:</label>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            placeholder='Password'
                            value={values.password}
                            onChange={handleChange}
                        />

                        <label htmlFor='passwordConfirmation'>Password Confirmation:</label>
                        <input
                            id='passwordConfirmation'
                            name='passwordConfirmation'
                            type='password'
                            placeholder='Password Confirmation'
                            value={values.passwordConfirmation}
                            onChange={handleChange}
                        />
                    <button type='submit'>Submit</button>
                    </form>
                    )}
            </Formik>
        </Container>
    )


    // return (
    // <div>
    //     <h1>This is the SignUp.</h1>
    // </div>
    // )
}

export default SignUpForm;