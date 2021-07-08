import React from 'react'
import { StyleSheet } from "react-native";
import * as Yup from 'yup'

import Screen from '../components/Screen'
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField';
import AppFormPicker from '../components/forms/AppFormPicker';
import SubmitButton from '../components/forms/SubmitButton';
import CategoryPickerItem from '../components/CategoryPickerItem'

const validationSchema = Yup.object().shape({
        title: Yup.string().required().min(1).label("Title"),
        price: Yup.number().required().min(1).max(99999).label("Price"),
        description: Yup.string().label("Description"),
        category: Yup.object().required().nullable().label("Category")
})

const categories = [
    { label: "Food", value: 1, backgroundColor: "red", icon: "food-apple" },
    { label: "Clothing", value: 2, backgroundColor: "blue", icon: "tshirt-crew" },
    { label: "Childcare", value: 3, backgroundColor: "yellow", icon: "baby" },
    { label: "Cleaning & Hygiene", value: 4, backgroundColor: "green", icon: "silverware-clean" },
    { label: "Electronics", value: 5, backgroundColor: "pink", icon: "cellphone-link" },
    { label: "Books", value: 6, backgroundColor: "orange", icon: "bookshelf" },
    { label: "Furniture", value: 7, backgroundColor: "tomato", icon: "mail" },
    { label: "Tools", value: 8, backgroundColor: "violet", icon: "table-chair" },
    { label: "Other", value: 9, backgroundColor: "brown", icon: "view-grid" }
]

export default function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm initialValues={{title: "", price: "", description: "", category: null}} onSubmit={(values) => console.log(values)} validationSchema={validationSchema} >
                <AppFormField maxLength={255} name='title' placeholder='Title' />
                <AppFormField keyboardType="numeric" maxLength={8} name="price" placeholder="Price" width={120} />
                <AppFormPicker items={categories} name='category' numberOfColumns={3} PickerItemComponent={CategoryPickerItem} placeholder="Category" width="50%"/>
                <AppFormField maxLength={255} multiline name="description" numberOfLines={3} placeholder="Description" />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
  });