import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

interface Locations {
  id: number;
  name: string;
}

const DATA: Locations[] = [
  {
    id: 1,
    name: "The Colchis, the land of the Golden Fleece and Medea",
  },
  {
    id: 2,
    name: "The Temple of Delphi",
  },
  {
    id: 3,
    name: "The River Styx",
  },
]

const history = () => {

  const displayLocation = ({ item }: {item: Locations}) => (
  <View style={styles.Loc}>
    <Text>{item.name}</Text>
  </View>
)
  return (
    <FlatList
      data={DATA}
      renderItem={displayLocation}
    />
  )
}

export default history

const styles = StyleSheet.create({
  Loc: {
      padding: 10,
      backgroundColor: 'white',
    }
})