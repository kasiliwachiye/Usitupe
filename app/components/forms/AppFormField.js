import React from 'react'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

export default function AppFormField({name, width, ...otherProps}) {
    const { handleChange, setFieldTouched, errors, touched } = useFormikContext()

    return (
        <React.Fragment>
            <AppTextInput onBlur={() => setFieldTouched(name)} onChangeText={handleChange(name)} width={width} {...otherProps} />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </React.Fragment>
    )
}
