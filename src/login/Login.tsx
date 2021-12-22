import {Field, Form, Formik, FormikHelpers} from "formik";

export const Login = () => {
    console.log()
    return (<div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}


type Values = {
    login:string
    password:string
}

const LoginForm = () => {
    const initialValues: Values = {login:'', password:''}
    return (<div>
            <Formik
            initialValues={initialValues}
            onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
            ) => {
                setTimeout(() => {
                    console.log(values)
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}>
            <Form>
                <div>
                    <Field id={'login'} name={'login'} placeholder={"Login"}/>
                </div>
                <div>
                    <Field id={'password'} type={'password'} name={'password'} placeholder={"Password"}/>
                </div>
                <div>
                    <Field id={'rememberMe'} name={'rememberMe'} type={"checkbox"}/> remember me
                </div>
                <div>
                    <button type={'submit'}>Login</button>
                </div>
            </Form>
            </Formik>
        </div>
    )
}