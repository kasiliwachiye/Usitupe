import React from 'react'
import { Formik } from 'formik'

export default function AppForm({ initialValues, onSubmit, validationSchema, children }) {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
            {() => (<React.Fragment>{children}</React.Fragment>) }
        </Formik>
    )
}