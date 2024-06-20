import React, { useState } from "react";
import { Formik } from 'formik';
import * as yup from 'yup'
import { Container } from '@mui/material';
import { useNavigate } from "react-router-dom";

function ProfileForm({ user, setUser }) {
    // const [profile, setProfile] = useState(true)
    const navigate = useNavigate();


    const profileSchema = yup.object().shape({
        firstName: yup.string().min(1, 'First name too short!').max(15, 'First name too long!'),
        lastName: yup.string().min(1, 'Last name too short!').max(15, 'Last name too long!'),
        email: yup.string().email("Invalid email address"),//.min(1, 'Email too short!').max(25, 'Email too long!'),
        phoneNumber: yup.string().min(10, 'Phone number too short!').max(17, 'Phone number too long!'),
        // username: yup.string().min(5, 'Username too short!').max(15, 'Username too long!'),
        // password: yup.string().min(5, 'Password too short!').max(15, 'Password too long!'),
        // passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Passwords must match!'),
        zipCode: yup.number().integer().min(10000, 'Invalid zip code').max(99999, 'Invalid zip code!'),
        interests: yup.string().required('Interest is required!'),
        skills: yup.string().required('Skills are required!'),
        hoursWanted: yup.number().integer().min(1, 'Minimum of 1 hour required!'),
    })

    const handleFormSubmit = (values, { setSubmitting }) => {
        const endpoint = `/volunteer/${user.id}`
        fetch(endpoint, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(values)
        }).then((resp) => {
            if (resp.ok) {
                return resp.json()
            } else {
                alert('Invalid credentials')
            }
        }).then((user) => {
            setUser(user);
            console.log(user);
            navigate("/");
        });
        setSubmitting(false);
    }

    const handleAccountDelete =(values) => {
        const endpoint = `/volunteer/${user.id}`
        fetch(endpoint, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(values)
        }).then((resp) => {
            if (resp.ok) {
                alert('Your account has been deleted. We are sorry to see you go!')
                setUser(null)
                navigate("/")
            } else {
                alert('Invalid credentials')
            }
        });
    }


    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        zipCode: '',
        interests: '',
        skills: '',
        hoursWanted: '',
    }

    return (
        <Container className="profile-container">
            <Formik
                initialValues={initialValues}
                validationSchema={profileSchema}
                onSubmit={handleFormSubmit}
            >
                {({ handleSubmit, values, handleChange }) => (
                    <form className='form' onSubmit={handleSubmit}>
                        <div className="left-column">
                            <label htmlFor='firstName'>First Name:</label>
                            <input
                                id='firstName'
                                name='firstName'
                                placeholder='First Name'
                                required
                                value={values.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="right-column">
                            <label htmlFor='lastName'>Last Name:</label>
                            <input
                                id='lastName'
                                name='lastName'
                                placeholder='Last Name'
                                required
                                value={values.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="left-column">
                            <label htmlFor='email'>Email:</label>
                            <input
                                id='email'
                                name='email'
                                placeholder='Email'
                                required
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                        {/* <div className="right-column">
                        <label htmlFor='username'>Username:</label>
                        <input
                            id='username'
                            name='username'
                            type='username'
                            placeholder='Username'
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div> */}
                        {/* {/* </div> */}
                        {/* <div className="left-column">
                        <label htmlFor='password'>Password:</label>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            placeholder='Password'
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div> */}
                        {/* <div className="right-column">
                        <label htmlFor='passwordConfirmation'>Password Confirmation:</label>
                        <input
                            id='passwordConfirmation'
                            name='passwordConfirmation'
                            type='password'
                            placeholder='Password Confirmation'
                            value={values.passwordConfirmation}
                            onChange={handleChange}
                        />
                    </div>  */}
                    <div className="left-column">
                        <label htmlFor='phoneNumber'>Phone Number:</label>
                        <input
                            id='phoneNumber'
                            name='phoneNumber'
                            placeholder='Phone Number'
                            required
                            value={values.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="right-column">
                        <label htmlFor='zipCode'>Zip Code:</label>
                        <input
                            id='zipCode'
                            name='zipCode'
                            type='zipCode'
                            placeholder='Zip Code'
                            value={values.zipCode}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="left-column">
                        <label htmlFor='interests'>Interests:</label>
                        <input
                            id='interests'
                            name='interests'
                            type='interests'
                            placeholder='Interests'
                            value={values.interests}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="right-column">
                        <label htmlFor='skills'>Skills:</label>
                        <input
                            id='skills'
                            name='skills'
                            type='skills'
                            placeholder='Skills'
                            value={values.skills}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="left-column">
                        <label htmlFor='hoursWanted'>Hours Wanted:</label>
                        <input
                            id='hoursWanted'
                            name='hoursWanted'
                            type='hoursWanted'
                            placeholder='Hours Wanted'
                            value={values.hoursWanted}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="button-container">
                        <button className="button-profileform" type='submit'>Submit</button>
                    </div>
                </form>
            )}
        </Formik>
    </Container>
)
}

export default ProfileForm;

