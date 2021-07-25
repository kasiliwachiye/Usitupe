import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import ActivityIndicator from "../components/ActivityIndicator";
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import Screen from "../components/Screen";
import SubmitButton from '../components/forms/SubmitButton';
import usersApi from "../api/users";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import authApi from "../api/auth";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const auth = useAuth()
  const [error, setError] = useState()
  const loginApi = useApi(authApi.login)
  const registerApi = useApi(usersApi.register)

  const handleSubmit = async (userInfo) => {
		const result = await registerApi.request(userInfo)
		if (!result.ok) {
			if (result.data) setError(result.data.error)
			else {
				setError('An unexpected error occured.')
				console.log(result)
			}
			return;
		}

		const { data: authToken } = await loginApi.request(
			userInfo.email,
			userInfo.password
		)
		auth.logIn(authToken)
	}

  return (
    <React.Fragment>      
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <AppForm initialValues={{ name: "", email: "", password: "" }} onSubmit={handleSubmit} validationSchema={validationSchema} >
          <AppFormField autoCorrect={false} icon="account" name="name" placeholder="Name" />
          <AppFormField autoCapitalize="none" autoCorrect={false} icon="email" keyboardType="email-address" name="email" placeholder="Email" textContentType="emailAddress" />
          <AppFormField autoCapitalize="none" autoCorrect={false} icon="lock" name="password" placeholder="Password" secureTextEntry textContentType="password" />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
      width: 80,
      height: 80,
      alignSelf: 'center',
      marginTop: 50,
      marginBottom: 20
  }
});

export default RegisterScreen;