import React, {useState, useContext} from 'react'
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'
import jwtDecode from 'jwt-decode';

import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import authApi from '../api/auth';
import AuthContext from '../auth/context';
import ErrorMessage from '../components/forms/ErrorMessage';
import SubmitButton from '../components/forms/SubmitButton';
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).matches().label("Password")
})

export default function LoginScreen() {
    const authContext = useContext(AuthContext)

    const [loginFailed, setLoginFailed] = useState(false)

    const handleSubmit = async({email, password}) => {
        const result = await authApi.login(email, password)
        if (!result.ok) return setLoginFailed(true)
        setLoginFailed(false)
        const user = jwtDecode(result.data)
        authContext.setUser(user)
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
