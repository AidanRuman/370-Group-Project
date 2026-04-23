import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Stack } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { locations_for_use, Locations } from '@/data/locations';

const history = () => {

const Seperator = () => (
    <View style={styles.separatorStyle}/>
);

  const displayLocation = ({ item }: {item: Locations}) => (
  <Pressable style={styles.Loc} onPress={
    () => {}}>
    <Text>{item.name}</Text>
  </Pressable>
)
  return (
    <FlatList
      data={locations_for_use.filter(
    (location) => location.aoi === "Classics"
  )}
      renderItem={displayLocation}
      ItemSeparatorComponent={Seperator}
    />
  )
}

export default history

const styles = StyleSheet.create({
  Loc: {
      padding: 15,
      backgroundColor: 'white',
    },
  separatorStyle: {
    height: 1,
    backgroundColor: 'black',
  }
})