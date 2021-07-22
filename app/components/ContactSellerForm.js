import React from 'react'
import { View, Keyboard, Alert } from 'react-native'
import * as Yup from 'yup'
import { Notifications } from 'expo'

import messages from '../api/messages'
import AppForm from '../components/forms/AppForm'
import AppFormField from '../components/forms/AppFormField'
import SubmitButton from '../components/forms/SubmitButton'


const validationSchema = Yup.object().shape({
	message: Yup.string().required("You can't send an empty message")
})

export default function ContactSellerForm({ listing }) {
	const handleSubmit = async ({ message }, { resetForm }) => {
		Keyboard.dismiss()

		const result = await messages.send(message, listing.id)

		if (!result.ok) {
			console.log('Error', result)
			return Alert.alert('Error', 'Could not send the message to the seller')
		}

		resetForm()

		Notifications.presentLocalNotificationAsync({
			title: 'Sent!',
			body: 'Your message was sent to the seller.'
		})
	}

	return (
		<AppForm
			initialValues={{ message: '' }}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}>
			<View>
				<AppFormField name='message' placeholder='Hey! Is this available?' />
				<SubmitButton title='Send' />
			</View>
		</AppForm>
	)
}
