import React, { useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'

import ActivityIndicator from '../components/ActivityIndicator'
import AppButton from '../components/AppButton'
import AppText from '../components/AppText'
import Card from '../components/Card'
import colors from '../config/colors'
import listingsApi from '../api/listings'
import routes from '../navigation/routes'
import Screen from '../components/Screen'
import useApi from '../hooks/useApi'

export default function ListingsScreen({ navigation }) {
    const getListingsApi = useApi(listingsApi.getListings)
    
    useEffect(() => {
        getListingsApi.request()
     }, [])

    return (
        <React.Fragment>            
            <ActivityIndicator visible={getListingsApi.loading} />
            <Screen style={styles.screen}>
                {getListingsApi.error && (
                    <>
                        <AppText>Couldn't retrieve listings</AppText>
                        <AppButton title="Retry" onPress={loadListings} />
                    </>
                    )
                }
                <FlatList
                data={getListingsApi.data} 
                keyExtractor={(listing) => listing.id.toString()} 
                renderItem={({item}) => (
                    <Card 
                        title={item.title} 
                        subtitle={"Ksh " + item.price} 
                        imageUrl={item.images[0].url} 
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        thumbnailUrl={item.images[0].thumbnailUrl}
                        />
                    )}
                    />
            </Screen>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.light
    }
})
