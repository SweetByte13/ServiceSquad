import React, { useState } from "react";
import { Formik } from 'formik';
import * as yup from 'yup'
import { Container } from '@mui/material';

function ProfileForm({ setUser }) {
    const [profile, setProfile] = useState(true)


    const signupSchema = yup.object().shape({
        firstName: yup.string().min(1, 'First name too short!').max(15, 'First name too long!'),
        lastName: yup.string().min(1, 'Last name too short!').max(15, 'Last name too long!'),
        email: yup.string().min(1, 'Email too short!').max(25, 'Email too long!'),
        phoneNumber: yup.string().min(10, 'Phone number too short!').max(17, 'Phone number too long!'),
        username: yup.string().min(5, 'Username too short!').max(15, 'Username too long!'),
        password: yup.string().min(5, 'Password too short!').max(15, 'Password too long!'),
        passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Passwords must match!'),
        zipCode: yup.number().integer().min(10000, 'Invalid zip code').max(99999, 'Invalid zip code!'),
        interests: yup.string().required('Interest is required!'),
        skills: yup.string().required('Skills are required!'),
        hoursWanted: yup.number().integer().min(1, 'Minimum of 1 hour required!'),
    })
}

const handleEditSubmit = (values) => {
    const endpoint = '/profile'
    fetch(endpoint, {
        method: 'PATCH',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(values) 
        // pass updated profile values in request body
    }).then((resp) => {
        if (resp.ok) {
            resp.json().then((user) => {
                setUser(user)
            })
        } else {
            alert('Invalid credentials')
        }
    })
}

const handleDeleteSubmit = (values) => {
    const endpoint = '/profile'
    fetch(endpoint, {
        method: 'DELETE',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(values) 
        // pass updated profile values in request body
    }).then((resp) => {
        if (resp.ok) {
            resp.json().then((user) => {
                setUser(user)
            })
        } else {
            alert('Invalid credentials')
        }
    })
}

    const [formValues, setFormValues] = useState({
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
    });

    return (
        <Container className="profile-container">
            <Formik
                initialValues={initialValues}
                validationSchema={profileSchema}
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
                            onChange={handleFirstNameChange}
                        />

                        <label htmlFor='lastName'>Last Name:</label>
                        <input
                            id='lastName'
                            name='lastName'
                            placeholder='Last Name'
                            required
                            value={values.lastName}
                            onChange={handleLastNameChange}
                        />

                        <label htmlFor='email'>Email:</label>
                        <input
                            id='email'
                            name='email'
                            placeholder='Email'
                            required
                            value={values.email}
                            onChange={handleEmailChange}
                        />

                        <label htmlFor='phoneNumber'>Phone Number:</label>
                        <input
                            id='phoneNumber'
                            name='phoneNumber'
                            placeholder='Phone Number'
                            required
                            value={values.phoneNumber}
                            onChange={handlePhoneNumberChange}
                        />

                        <label htmlFor='username'>Username:</label>
                        <input
                            id='username'
                            name='username'
                            type='username'
                            placeholder='Username'
                            value={values.username}
                            onChange={handleUsernameChange}
                        />

                        {/* <label htmlFor='password'>Password:</label>
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
                        /> */}

                        <label htmlFor='zipCode'>Zip Code:</label>
                        <input
                            id='zipCode'
                            name='zipCode'
                            type='zipCode'
                            placeholder='Zip Code'
                            value={values.zipCode}
                            onChange={handleZipCodeChange}
                        />

                        <label htmlFor='interests'>Interests:</label>
                        <input
                            id='interests'
                            name='interests'
                            type='interests'
                            placeholder='Interests'
                            value={values.username}
                            onChange={handleInterestsChange}
                        />

                        <label htmlFor='skills'>Skills:</label>
                        <input
                            id='skills'
                            name='skills'
                            type='skills'
                            placeholder='Skills'
                            value={values.skills}
                            onChange={handleSkillsChange}
                        />


                    <button type='submit'>Submit</button>
                    </form>
                    )}
            </Formik>
        </Container>
    )

export default ProfileForm;


// <Formik
//     initalValues={initialValues}
//     validationSchema={signupSchema}
//     onSubmit={handleSubmit}
// >
