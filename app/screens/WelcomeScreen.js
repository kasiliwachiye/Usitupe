import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'

import AppButton from '../components/AppButton'
import colors from '../config/colors'


export default function WelcomeScreen() {
    return (
        <ImageBackground style={styles.background} source={require('../assets/WelcomeScreenImage.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <Text style={styles.tagline}>Usitupe, Peana</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login"></AppButton>
                <AppButton title="Register" color={colors.secondary}></AppButton>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonContainer:{
        padding: 20,
        width: "100%"
    },
    logo: {
        width: 100,
        height: 100, 
    },
    logoContainer:{
        position: "absolute",
        top: 70,
        alignItems: 'center'
    },
    tagline: {
        fontSize: 30,
        color: "white",
        paddingTop: 20
    }    
})
