import {Field, Form, Formik, FormikHelpers} from "formik";
import React, {FC} from "react";
import {FilterType} from "../../Redux/users-reducer";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}

type FormType = {
    term: string,
    friend: "null" | "false" | "true"
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}


export const UsersSearchForm: FC<PropsType> = React.memo(({onFilterChanged, ...props}) => {
    const initialValues: FormType = {term: '', friend: 'null'}
    const submit = (values: FormType, {setSubmitting}: FormikHelpers<FormType>) => {
        const filter:FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true"
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }

    return <div>
        <Formik
            initialValues={initialValues}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Search
                    </button>
                </Form>
            )}
        </Formik>
    </div>
})
