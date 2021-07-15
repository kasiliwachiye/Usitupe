import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Card from '../components/Card'
import colors from '../config/colors'
import listingsApi from '../api/listings'
import routes from '../navigation/routes'
import Screen from '../components/Screen'

export default function ListingsScreen({ navigation }) {
    const [listings, setListings] = useState([])
    
    useEffect(() => {
        loadListings()
     }, [])

    const loadListings = async() => {
        const response = await listingsApi.getListings()
        setListings(response.data)
    }
    
    return (
        <Screen style={styles.screen}>
            <FlatList
             data={listings} 
             keyExtractor={(listing) => listing.id.toString()} 
             renderItem={({item}) => (
                <Card 
                    title={item.title} 
                    subtitle={"Ksh " + item.price} 
                    imageUrl={item.images[0].url} 
                    onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)} 
                    />
                )}
                />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.light
    }
})
