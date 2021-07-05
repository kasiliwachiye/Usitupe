import React from 'react'
import { StyleSheet, FlatList } from 'react-native'

import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'

const listings = [{id: 1, title: 'Soaps and detergents', price: 200,  image: require('../assets/soaps.jpg')}, {id: 2, title: 'Fresh tomatoes', price: 10,  image: require('../assets/tomatoes.jpg')}]

export default function ListingsScreen() {
    return (
        <Screen style={styles.screen}>
            <FlatList data={listings} keyExtractor={listing => listing.id.toString()} renderItem={({item}) => <Card title={item.title} subtitle={"Ksh" + item.price} image={item.image} />} />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})
