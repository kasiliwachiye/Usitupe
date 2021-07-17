import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Image } from 'react-native-expo-image-cache'

import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

export default function ListingDetailsScreen({ route }) {
    const listing = route.params

    return (
        <View>
            <Image style={styles.image} preview={{uri:listing.images[0].thumbnailUrl}} tint='light' uri={listing.images[0].url} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>Ksh {listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem image={require('../assets/em.jpg')} title="Kasili Wachiye" subtitle='3 listings'  />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 7.5
    },
    image: {
        width: "100%",
        height: 300
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold", 
        marginLeft: 5
    },
    title: {
        fontWeight: "bold",
        marginBottom: 10,
        marginLeft: 5
    },
    userContainer: {
        marginVertical: 30,
    }
})
