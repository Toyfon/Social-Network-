import React, {FC} from "react";
import {useFormik} from "formik";
import * as yup from 'yup';
import {Button, Checkbox, FormControlLabel, TextField} from "@mui/material";
import s from './LoginForm.module.css'
import {useDispatch, useSelector} from "react-redux";
import {login} from "../Redux/auth-reducer";
import {RootReducerType} from "../Redux/redux-store";
import {Redirect} from "react-router-dom";


export type FormType = {
    email: string
    password: string
    rememberMe: boolean
}

type PropsType = {}

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


export const Login: FC<PropsType> = () => {

    const isAuth = useSelector<RootReducerType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const formik = useFormik<FormType>({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const {email, password, rememberMe} = values
            dispatch(login(email, password, rememberMe))

        },
    });

    if (isAuth) {
        return  <Redirect to={'/profile'}/>
    }
    
    return (
        <div>
            <form onSubmit={formik.handleSubmit} className={s.form}>
                <TextField variant={'standard'}
                           id="email"
                           name="email"
                           label="Email"
                           value={formik.values.email}
                           onChange={formik.handleChange}
                           error={formik.touched.email && Boolean(formik.errors.email)}
                           helperText={formik.touched.email && formik.errors.email}
                           sx={{width: '300px', marginBottom: '10px'}}
                />
                <TextField variant={'standard'}
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

                <FormControlLabel
                    id={'rememberMe'}
                    value={formik.values.rememberMe}
                    name={'rememberMe'}
                    control={<Checkbox/>}
                    label="Remember me"
                    labelPlacement="end"
                    onChange={formik.handleChange}
                />
                <Button color="primary" variant="contained" type="submit" sx={{width: '50px', marginBottom: '5px'}}>
                    Submit
                </Button>
            </form>
        </div>
    );
};