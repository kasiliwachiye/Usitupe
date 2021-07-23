import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import colors from '../config/colors'
import Screen from '../components/Screen'
import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import useAuth from '../auth/useAuth'

const menuItems = [ {title: "My listings", icon: {name: "format-list-bulleted", backgroundColor: colors.primary}}, { title: "My messages", icon: {name: "message", backgroundColor: colors.secondary}, targetScreen: "Messages" } ]

export default function AccountScreen({ navigation }) {
    const { user, logOut } = useAuth()

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    image={require('../assets/dp.png')} 
                    title={user.name} 
                    subtitle={user.email} 
                />
            </View>

            <View style={styles.container}>
                <FlatList 
                    data={menuItems} 
                    keyExtractor={(menuItem) => menuItem.title} 
                    ItemSeparatorComponent={ListItemSeparator} 
                    renderItem={({item}) => (
                        <ListItem 
                            title={item.title} 
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                            } 
                            onPress={() => navigation.navigate(item.targetScreen)} 
                        />
                    )}
                />
            </View>

            <View>
                <ListItem 
                    title="Logout" 
                    IconComponent={<Icon name="logout" backgroundColor="#ffe66d"/>} 
                    onPress={() => logOut()}    
                />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 50,
    },
    screen: {
        backgroundColor: colors.light
    }
})