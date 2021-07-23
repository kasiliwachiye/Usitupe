import React, { useState } from 'react'
import { FlatList } from 'react-native'

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
    { id:1, title: "Never gonna give you up,", description: "never gonna let you down", image: require('../assets/avatar.png')},
    { id:2, title: "Never gonna run around...", description: "...and desert you", image: require('../assets/avatar.png')},
    { id:3, title: "R-r-rick, I think we got", description: "Rick rolled into another dimension", image: require('../assets/morty.png')},    
    { id:4, title: "*Burp* Shut up Morty", description: "It's just Kasili playing with the code", image: require('../assets/rick.png')},
    { id:5, title: "Hey Kasili, how much for the plumbus?", description: "Trade it for some granite from Planet Squanch?", image: require('../assets/rick.png')}
]

export default function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        // Delete message from messages
        setMessages(messages.filter((m) => m.id !== message.id))
    }

    return (
        <Screen>
            <FlatList 
                data={messages} 
                keyExtractor={message => message.id.toString()} 
                renderItem={({item}) => 
                    <ListItem 
                        title={item.title} 
                        subtitle={item.description} 
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => (<ListItemDeleteAction onPress={() => handleDelete(item)} />)}
                        />
                        }
                ItemSeparatorComponent={() => <ListItemSeparator />}
                refreshing={refreshing}
                onRefresh={() => setMessages([{ id:2, title: "T2", description: "D2", image: require('../assets/em.jpg')}])}
                />
        </Screen>
    )
}