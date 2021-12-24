import React, {FC} from "react";
import {Controller, useForm} from "react-hook-form";
import {Button, Checkbox, FormControlLabel, TextField} from "@mui/material";
import {login} from "../Redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {RootReducerType} from "../Redux/redux-store";
import s from "./LoginForm.module.css";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";


type FormType = {
    email: string
    password: string
    rememberMe: boolean
}

type PropsType = {}

const schema = yup.object({
    email: yup.string().required('Email is required').email('Enter a valid email'),
    password: yup.string().required('Password is required').min(8, 'Password should be  min 8 characters length'),
});

export const LoginFormReactHookForm: FC<PropsType> = () => {

    const isAuth = useSelector<RootReducerType, boolean>(state => state.auth.isAuth)
    const dispatch = useDispatch()

    const {control, handleSubmit, formState: {errors}} = useForm<FormType>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        resolver: yupResolver(schema)
    })
    const onSubmit = (values: FormType) => {
        const {email, password, rememberMe} = values
        dispatch(login(email, password, rememberMe))
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <Controller
                    control={control}
                    name="email"
                    // @ts-ignore
                    render={({field}) => (
                        <TextField {...field}
                                   label="Email"
                                   sx={{width: '300px', marginBottom: '10px'}}
                                   error={!!errors?.email}
                                   helperText={errors?.email ? errors.email.message : null}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({field}) => (
                        <TextField {...field}
                                   type={'password'}
                                   label="Password"
                                   sx={{width: '300px', marginBottom: '10px'}}
                                   error={!!errors?.password}
                                   helperText={errors?.password ? errors.password.message : null}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="rememberMe"
                    render={({field: {value, onChange}}) => (
                        <FormControlLabel
                            control={<Checkbox checked={value} onChange={onChange}/>}
                            label="Remember me"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>

        </div>
    )
}