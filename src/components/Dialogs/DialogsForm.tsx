import React, {FC} from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";

type FormType = {
    newMessageBody: string
}

type DialogsPropsType = {
    addNewMessage: (values: string) => void
}

export const DialogsForm: FC<DialogsPropsType> = React.memo(({addNewMessage, ...props}) => {
    const initialValues: FormType = {newMessageBody: ''}
    const submit = (values: FormType, {setSubmitting}: FormikHelpers<FormType>) => {
        addNewMessage(values.newMessageBody)
        setSubmitting(false)
    }

    return (
        <Formik initialValues={initialValues}
                onSubmit={submit}>
            <Form>

                <div>
                    <Field placeholder="Enter your message"
                           name='newMessageBody'
                           component='textarea'/>
                </div>
                <div>
                    <button>send</button>
                </div>
            </Form>
        </Formik>
    )
})