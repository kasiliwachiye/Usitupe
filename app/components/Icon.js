import React from 'react'
import { View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors'

export default function Icon({name, size = 40, backgroundColor = colors.black, iconColor = colors.white}) {
    return (
        <View style={{width: size, height: size, borderRadius: size/2, backgroundColor, justifyContent: 'center', alignItems: 'center'}}>
            <AntDesign name={name} color={iconColor} size={size*0.5} />
        </View>
    )
}