import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { locations_for_use, Locations } from '@/data/locations';

const philosophy = () => {
  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(null);

const Seperator = () => (
    <View style={styles.separatorStyle}/>
);

  const displayLocation = ({ item }: {item: Locations}) => (
  <Pressable
    style={styles.Loc}
    onPress={() =>
      setSelectedLocationId((current) => (current === item.id ? null : item.id))
    }
  >
    <Text>{item.name}</Text>
    {selectedLocationId === item.id && item.blurb ? (
      <Text style={styles.blurb}>{item.blurb}</Text>
    ) : null}
  </Pressable>
)
  return (
    <FlatList
      data={locations_for_use.filter(
    (location) => location.aoi === "Philosophers"
  )}
      renderItem={displayLocation}
      ItemSeparatorComponent={Seperator}
    />
  )
}

export default philosophy

const styles = StyleSheet.create({
  Loc: {
      padding: 15,
      backgroundColor: 'white',
    },
  separatorStyle: {
    height: 1,
    backgroundColor: 'black',
  },
  blurb: {
    marginTop: 8,
    color: '#333',
  },
})