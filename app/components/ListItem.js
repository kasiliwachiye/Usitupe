import React from 'react'
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import colors from '../config/colors'
import AppText from './AppText'

export default function ListItem({image, title, subtitle, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>            
                <View style={styles.container}>
                    <Image style={styles.image} source={image} />
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subtitle}>{subtitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 5
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        marginLeft: 5
    },
    subtitle: {
        color: colors.medium,
        fontSize: 12.5
    },
    title: {
        fontWeight: "bold",
        fontSize: 15
    }
})
