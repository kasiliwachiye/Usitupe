import React from 'react'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

export default function AppFormField({name, width, ...otherProps}) {
    const { setFieldTouched, errors, setFieldValue, touched, values } = useFormikContext()

    return (
        <React.Fragment>
            <AppTextInput onBlur={() => setFieldTouched(name)} onChangeText={text => setFieldValue(name, text)} value={values[name]} width={width} {...otherProps} />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </React.Fragment>
    )
}
