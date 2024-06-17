import React, { useEffect } from "react";
import { Formik } from 'formik';
import * as yup from 'yup';

function LoginForm({onLogin}) {
    // let LoginSchema = yup.object().shape({
    //     username: yup.string().required().min(6),
    //     password_hash: yup.string().required().min(8)
    // })

    // do we need double {} for the initialValues?
    // return (
    //   <section>
    //     <Formik
    //         initialValues = {{
    //             username: '',
    //             password_hash: ''
    //         }}
    //         validationSchema={LoginSchema}
    //         onSubmit={}
    //     >

    //     </Formik>
    //   </section>
    // )
}
export default LoginForm;