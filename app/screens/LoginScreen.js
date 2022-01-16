import React, {useState} from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'

import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import authApi from '../api/auth';

import ErrorMessage from '../components/forms/ErrorMessage';
import SubmitButton from '../components/forms/SubmitButton';
import Screen from '../components/Screen'
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).matches().label("Password")
})

export default function LoginScreen() {
    const { logIn } = useAuth()

    const [loginFailed, setLoginFailed] = useState(false)

    const handleSubmit = async({email, password}) => {
        const result = await authApi.login(email, password)
        if (!result.ok) return setLoginFailed(true)
        setLoginFailed(false)
        logIn(result.data)
    }

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <AppForm initialValues={{email: '', password: ''}} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <ErrorMessage error="Invalid email/password" visible={loginFailed} />
                <AppFormField autoCapitalize="none" autoCorrect={false}  icon="mail" keyboardType="email-address" name='email' placeholder="Email" textContentType="emailAddress" />
                <AppFormField autoCapitalize="none" autoCorrect={false} icon="lock" name="password" placeholder="Password" secureTextEntry textContentType="password" />
                <SubmitButton title="Login" />
            </AppForm>
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
