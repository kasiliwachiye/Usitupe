import React from 'react'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, AppFormPicker } from '../components/forms'
import CategoryPickerItem from '../components/CategoryPickerItem'

const validationSchema = Yup.object().shape(
    {
        title: Yup.string().required().min(1).label("Title"),
        price: Yup.number().required().min(1).max(10000).label("Price"),
        description: Yup.string().label("Description"),
        category: Yup.object().required().nullable().label("Category")
    }
)

const categories = [
    { label: "Food", value: 1, backgroundColor: "red", icon: "mail" },
    { label: "Household Items", value: 2, backgroundColor: "blue", icon: "mail" },
    { label: "Clothing Items", value: 3, backgroundColor: "yellow", icon: "mail" },
    { label: "Clothing Items", value: 4, backgroundColor: "green", icon: "mail" },
    { label: "Clothing Items", value: 5, backgroundColor: "pink", icon: "mail" },
    { label: "Clothing Items", value: 6, backgroundColor: "orange", icon: "mail" },
    { label: "Clothing Items", value: 7, backgroundColor: "turqoise", icon: "mail" },
    { label: "Clothing Items", value: 8, backgroundColor: "tomato", icon: "mail" },
    { label: "Clothing Items", value: 9, backgroundColor: "brown", icon: "mail" },

]

export default function ListingEditScreen() {
    return (
        <Screen>
            <AppForm initialValues={{title: "", price: "", description: "", category: null}} onSubmit={(values) => console.log(values)} validationSchema={validationSchema} >
                <AppFormField maxLength={255} name='title' placeholder='Title' />
                <AppFormField keyboardType="numeric" maxLength={8} name="price" placeholder="Price" width={120} />
                <AppFormPicker items={categories} name='category' numberOfColumns={3} PickerItemComponent={CategoryPickerItem} placeholder="Category" width="50%"/>
                <AppFormField maxLength={255} multiline name="description" numberOfLines={3} placeholder="Description" />
            </AppForm>
        </Screen>
    )
}