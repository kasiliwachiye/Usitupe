import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors'

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <AntDesign name="closecircleo" size={24} color="white" />
            </View>
            <View style={styles.deleteIcon}>
                <AntDesign name="delete" size={24} color="white" />
            </View>
            <Image resizeMode="contain" style={styles.image} source={require("../assets/soaps.jpg")} />
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon:{
        position: "absolute",
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30
    },
    image: {
        width: "100%",
        height: "100%"
    }
})
