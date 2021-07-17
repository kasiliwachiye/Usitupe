import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Image } from 'react-native-expo-image-cache'

import colors from '../config/colors'
import AppText from './AppText'

export default function Card({ imageUrl, title, subtitle, onPress, thumbnailUrl }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>            
            <View style={styles.card}>
                <Image style={styles.image} tint='light' preview={{uri:thumbnailUrl}} uri={imageUrl}/>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                    <AppText style={styles.subtitle} numberOfLines={2} >{subtitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white, 
        marginBottom: 20,
        overflow: "hidden"
    },
    detailsContainer:{
        padding: 20
    },
    image: {
        width: "100%",
        height: 200
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: "bold"
    },
    title: {
        marginBottom: 7
    }
})
