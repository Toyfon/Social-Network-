import React, {FC} from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {Textarea} from "../common/FormContols/FormContrlols";
import s from "../common/FormContols/FormControl.module.css";
import {validateTextArea} from "../../assets/validators/validators";

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
            {({errors, touched}) => (
            <Form>
                <div>
                    <Field placeholder="Enter your message"
                           name='newMessageBody'
                           component={Textarea}
                           validate={validateTextArea}
                    />
                    {errors.newMessageBody && touched.newMessageBody && <div className={s.errColor}>{errors.newMessageBody}</div>}
                </div>
                <div>
                    <button>send</button>
                </div>
            </Form>
            )}
        </Formik>
    )
} )