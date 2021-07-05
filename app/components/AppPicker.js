import React, { useState } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screen from './Screen'
import PickerItem from './PickerItem'

export default function AppPicker({icon, items, onSelectItem, placeholder, selectedItem }) {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <AntDesign name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
                    {selectedItem ? (<AppText style={styles.text}>{selectedItem.label}</AppText>) : (<AppText style={style.placeholder}>{placeholder}</AppText>) }
                    <AntDesign name='down' size={12.5} color={defaultStyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button title='close' onPress={() => setModalVisible(false)}/>
                    <FlatList data={items} keyExtractor={(item) => item.value.toString()} renderItem={({item}) => (<PickerItem label={item.label} onPress={() => {setModalVisible(false); onSelectItem(item)}} />) } />                    
                </Screen>
            </Modal>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 10,
        marginVertical: 10,
        alignItems: "center"
    },
    icon: {
        marginRight: 10,
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1
    },
    text: {
        flex: 1
    }    
})
