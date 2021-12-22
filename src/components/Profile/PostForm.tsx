import React, {FC} from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";

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
            <Form>

                <div>
                    <Field placeholder="Enter your post"
                           name='newPostText'
                           component='textarea'/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </Form>
        </Formik>
    )
})