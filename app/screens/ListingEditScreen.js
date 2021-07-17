import React, { useState } from 'react'
import { StyleSheet } from "react-native"
import * as Yup from 'yup'

import AppForm from '../components/forms/AppForm'
import AppFormField from '../components/forms/AppFormField'
import AppFormImagePicker from '../components/forms/AppFormImagePicker'
import AppFormPicker from '../components/forms/AppFormPicker'
import CategoryPickerItem from '../components/CategoryPickerItem'
import listingsApi from '../api/listings'
import Screen from '../components/Screen'
import SubmitButton from '../components/forms/SubmitButton'
import useLocation from '../hooks/useLocation'
import UploadScreen from './UploadScreen'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(99999).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min('1', 'Please select at least one image')
})

const categories = [
    { label: "Food", value: 1, backgroundColor: "#fc5c65", icon: "food-apple" },
    { label: "Clothing", value: 2, backgroundColor: "#fd9644", icon: "tshirt-crew" },
    { label: "Childcare", value: 3, backgroundColor: "#fed330", icon: "baby" },
    { label: "Cleaning & Hygiene", value: 4, backgroundColor: "#26de81", icon: "silverware-clean" },
    { label: "Electronics", value: 5, backgroundColor: "#2bcbba", icon: "cellphone-link" },
    { label: "Books", value: 6, backgroundColor: "#45aaf2", icon: "bookshelf" },
    { label: "Furniture", value: 7, backgroundColor: "#4b7bec", icon: "mail" },
    { label: "Tools", value: 8, backgroundColor: "#a55eea", icon: "table-chair" },
    { label: "Other", value: 9, backgroundColor: "#778ca3", icon: "view-grid" }
]

export default function ListingEditScreen() {
    const location = useLocation()
    const [uploadVisible, setUploadVisible] = useState(false)
    const [progress, setProgress] = useState(0)

    const handleSubmit = async(listing, { resetForm }) => {
        setProgress(0)
        setUploadVisible(true)
        const result = await listingsApi.addListing({...listing, location}, (progress) => setProgress(progress))
        setUploadVisible(false)

        if (!result.ok) {
            setUploadVisible(false)
            return alert('Could not save the listing')
        }

        resetForm()
    }
    
    return (
        <Screen style={styles.container}>
            <UploadScreen 
                onDone={() => setUploadVisible(false)} 
                progress={progress} 
                visible={uploadVisible}
            />
            <AppForm initialValues={{title: "", price: "", description: "", category: null, images: [] }} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <AppFormImagePicker name="images" />
                <AppFormField maxLength={255} name='title' placeholder='Title' />
                <AppFormField keyboardType="numeric" maxLength={8} name="price" placeholder="Price" width="30%" />
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
    }
  })