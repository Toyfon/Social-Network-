import React, {FC} from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {validateTextArea} from "../../assets/validators/validators";
import {Textarea} from "../common/FormContols/FormContrlols";
import s from './../common/FormContols/FormControl.module.css'



type FormType = {
    newPostText: string
}

type PostPropsType = {
    addNewPost: (newPostText: string) => void
}


export const PostForm: FC<PostPropsType> = React.memo(({addNewPost}) => {

    const initialValues: FormType = {newPostText: ''}
    const submit = (values: FormType, {setSubmitting}: FormikHelpers<FormType>) => {
        addNewPost(values.newPostText)
        setSubmitting(false)
    }

    return (
        <Formik initialValues={initialValues}
                onSubmit={submit}>
            {({errors, touched}) => (
                <Form>
                    <div>
                        <Field placeholder="Enter your post"
                               name='newPostText'
                               component={Textarea}
                               validate={validateTextArea}/>
                        {errors.newPostText && touched.newPostText && <div className={s.errColor}>{errors.newPostText}</div>}
                    </div>
                    <div>
                        <button>Add</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
})