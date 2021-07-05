import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import colors from '../config/colors'

export default function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>            
            <View style={styles.container}>
                <AntDesign name="delete" size={20} color={colors.white} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: "15%",
        justifyContent: "center",
        alignItems: "center" 
    }
})
