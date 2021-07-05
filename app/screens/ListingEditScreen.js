import React from 'react'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton} from '../components/forms'
import AppFormPicker from '../components/AppFormPicker'

const validationSchema = Yup.object().shape(
    {
        title: Yup.string().required().min(1).label("Title"),
        price: Yup.number().required().min(1).max(1000).label("Price"),
        description: Yup.string().label("Description"),
        category: Yup.object().required().nullable().label("Category")
    }
)

const categories = [
    { label: "Food", value: 1 },
    { label: "Household Items", value: 2 },
    { label: "Clothing Items", value: 3 }
]

export default function ListingEditScreen() {
    return (
        <Screen>
            <AppForm initialValues={{title: "", price: "", description: "", category: null}} onSubmit={(values) => console.log(values)} validationSchema={validationSchema} >
                <AppFormField maxLength={255} name='title' placeholder='Title' />
                <AppFormField keyboardType="numeric" maxLength={8} name="price" placeholder="Price" />
                <AppFormPicker items={categories} name="category" placeholder="Category"/>
                <AppFormField maxLength={255} multiline name="description" numberOfLines={3} placeholder="Description" />
            </AppForm>
        </Screen>
    )
}