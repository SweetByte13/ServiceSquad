import React, {useState} from "react";
import { Formik } from 'formik';
import * as yup from 'yup'
import { Container } from '@mui/material';


function SignUpForm({ setUser }) {
    const [signup, setSignUp] = useState(true)

    const signupSchema = yup.object().shape({
        firstName: yup.string().min(1, 'First name too short!').max(15, 'First name too long!'),
        lastName: yup.string().min(1, 'Last name too short!').max(15, 'Last name too long!'),
        email: yup.string().min(1, 'Email too short!').max(25, 'Email too long!'),
        phoneNumber: yup.string().min(10, 'Phone number too short!').max(11, 'Phone number too long!'),
        // phone: 10 digits for area code in US, max set to catch error if they enter an extra number?
        username: yup.string().min(5, 'Username too short!').max(15, 'Username too long!'),
        password: yup.string().min(5,'Password too short!').max(15, 'Password too long!'),
        passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Passwords must match!'),
        zipCode: yup.number().integer().min(10000, 'Invalid zip code').max(99999, 'Invalid zip code!'),
        interests: yup.string().required('Interest is required!'),
        skills: yup.string().required('Skills are required!'),
        hoursWanted: yup.number().integer().min(1, 'Minimum of 1 hour required!'),
        // no max set on number of hours wanted?
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

    let initialValues={
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
    }

    return (
        <Container className="signup-container">
            <Formik
                initalValues={initialValues}
                validationSchema={signupSchema}
                onSubmit={handleSubmit}
            >
                {({handleSubmit, values, handleChange}) => (
                    <form className='form' onSubmit={handleSubmit}>
                        
                        <label htmlFor='firstName'>First Name:</label>
                        <input
                            id='firstName'
                            name='firstName'
                            placeholder='First Name'
                            required
                            value={values.firstName}
                            onChange={handleChange}
                        />

                        <label htmlFor='lastName'>Last Name:</label>
                        <input
                            id='lastName'
                            name='lastName'
                            placeholder='Last Name'
                            required
                            value={values.lastName}
                            onChange={handleChange}
                        />

                        <label htmlFor='email'>Email:</label>
                        <input
                            id='email'
                            name='email'
                            placeholder='Email'
                            required
                            value={values.email}
                            onChange={handleChange}
                        />

                        <label htmlFor='phoneNumber'>Phone Number:</label>
                        <input
                            id='phoneNumber'
                            name='phoneNumber'
                            placeholder='Phone Number'
                            required
                            value={values.phoneNumber}
                            onChange={handleChange}
                        />

                        <label htmlFor='username'>Username:</label>
                        <input
                            id='username'
                            name='username'
                            type='username'
                            placeholder='Username'
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

                        <label htmlFor='zipCode'>Zip Code:</label>
                        <input
                            id='zipCode'
                            name='zipCode'
                            type='zipCode'
                            placeholder='Zip Code'
                            value={values.zipCode}
                            onChange={handleChange}
                        />

                        <label htmlFor='interests'>Interests:</label>
                        <input
                            id='interests'
                            name='interests'
                            type='interests'
                            placeholder='Interests'
                            value={values.username}
                            onChange={handleChange}
                        />

                        <label htmlFor='skills'>Skills:</label>
                        <input
                            id='skills'
                            name='skills'
                            type='skills'
                            placeholder='Skills'
                            value={values.skills}
                            onChange={handleChange}
                        />

                        <label htmlFor='hoursWanted'>Hours Wanted:</label>
                        <input
                            id='hoursWanted'
                            name='hoursWanted'
                            type='hoursWanted'
                            placeholder='Hours Wanted'
                            value={values.hoursWanted}
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