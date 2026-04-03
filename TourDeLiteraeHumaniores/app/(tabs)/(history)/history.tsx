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
  {
    id: 4,
    name: "The Battle of Marathon",
  },
  {
    id: 5,
    name: "The Scicilian Expedition",
  },
  {
    id: 6,
    name: "The City of Carthage",
  },
]

const history = () => {

const Seperator = () => (
    <View style={styles.separatorStyle}/>
);

  const displayLocation = ({ item }: {item: Locations}) => (
  <View style={styles.Loc}>
    <Text>{item.name}</Text>
  </View>
)
  return (
    <FlatList
      data={DATA}
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