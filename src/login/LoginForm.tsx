import React, {FC} from "react";
import {Field, Form, Formik, FormikHelpers, useFormik} from "formik";
import * as yup from 'yup';
import {Button, TextField} from "@mui/material";
import s from './LoginForm.module.css'


type FormType = {
    email: string
    password: string
    //rememberMe: boolean
}

type PropsType = {}

// export const LoginForm: FC<PropsType> = React.memo(() => {
//     const initialValues: FormType = {email: '', password: '', rememberMe: false}
//     const submit = (values: FormType, {setSubmitting}: FormikHelpers<FormType>) => {
//         console.log(values)
//         setSubmitting(false);
//     }
//
//     return <div>
//         <Formik
//             initialValues={initialValues}
//             onSubmit={submit}
//         >
//             {({isSubmitting, errors,touched}) => (
//                 <Form>
//                     <div>
//                         <Field name={'email'} placeholder={"Email"} />
//                     </div>
//                     <div>
//                         <Field name={'password'} type={'password'} placeholder={"Password"} />
//                     </div>
//                     <div>
//                         <Field name={'rememberMe'} type={"checkbox"}  /> remember me
//                     </div>
//                     <div>
//                         <button disabled={isSubmitting}>Login</button>
//                     </div>
//                 </Form>
//             )}
//         </Formik>
//     </div>
//
// })
//


const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});
export const WithMaterialUI:FC<PropsType> = () => {
    const formik = useFormik<FormType>({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div >
            <form onSubmit={formik.handleSubmit} className={s.form}>
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{width: '300px', marginBottom: '10px'}}
                />
                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    sx={{width: '300px', marginBottom: '10px'}}
                />
                <Button color="primary" variant="contained"  type="submit"   sx={{width: '50px', marginBottom: '5px'}}>
                    Submit
                </Button>
            </form>
        </div>
    );
};