import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

export default function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/soaps.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Soaps and detergents</AppText>
                <AppText style={styles.price}>Ksh 300</AppText>
                <View style={styles.userContainer}>
                    <ListItem image={require('../assets/em.jpg')} title="Kasili Wachiye" subtitle='5 listings'  />
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
