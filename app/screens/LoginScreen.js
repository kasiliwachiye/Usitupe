import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppFormField from '../components/AppFormField'
import SubmitButton from '../components/SubmitButton'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).matches().label("Password")
})

export default function LoginScreen() {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <Formik initialValues={{email: '', password: ''}} onSubmit={values => console.log(values)} validationSchema={validationSchema}>
                {() => (
                    <React.Fragment>
                        <AppFormField autoCapitalize="none" autoCorrect={false}  icon="mail" keyboardType="email-address" name='email' placeholder="Email" textContentType="emailAddress" />
                        <AppFormField autoCapitalize="none" autoCorrect={false} icon="lock" name="password" placeholder="Password" secureTextEntry textContentType="password" />
                        <SubmitButton title="Login" />
                    </React.Fragment>
                    )}
            </Formik>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})
