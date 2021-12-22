import React, {FC} from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";


type Values = {
    login: string
    password: string
    rememberMe: boolean
}

type PropsType = {}


export const LoginForm: FC<PropsType> = React.memo(() => {
    const initialValues: Values = {login: '', password: '', rememberMe: false}
    const submit = (values: Values, {setSubmitting}: FormikHelpers<Values>) => {
        console.log(values)
        setSubmitting(false);
    }

    return <div>
        <Formik
            initialValues={initialValues}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <div>
                        <Field name={'login'} placeholder={"Login"}/>
                    </div>
                    <div>
                        <Field name={'password'} type={'password'} placeholder={"Password"}/>
                    </div>
                    <div>
                        <Field name={'rememberMe'} type={"checkbox"}/> remember me
                    </div>
                    <div>
                        <button disabled={isSubmitting}>Login</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>

})