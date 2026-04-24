import { FlatList, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { locations_for_use, Locations, people_for_use, People } from '@/data/data';

const history = () => {
  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(null);
  const [selectedPersonId, setSelectedPersonId] = useState<number | null>(null);

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
    <Text style={styles.name}>{item.name}</Text>
    {selectedLocationId === item.id && item.blurb ? (
      <Text style={styles.blurb}>{item.blurb}</Text>
    ) : null}
  </Pressable>
)

const displayPerson = ({ item }: {item: People}) => (
  <Pressable
    style={styles.Loc}
    onPress={() =>
      setSelectedPersonId((current) => (current === item.id ? null : item.id))
    }
  >
    <Text style={styles.name}>{item.name}</Text>
    {selectedPersonId === item.id && item.blurb ? (
      <Text style={styles.blurb}>{item.blurb}</Text>
    ) : null}
  </Pressable>
)

  return (
  <ScrollView style={styles.container}>
    <Text style={styles.header}>Classical Locations</Text>
    <FlatList
      data={locations_for_use.filter(
        (location) => location.aoi === "Classics"
      )}
      renderItem={displayLocation}
      keyExtractor={(item) => `location-${item.id}`}
      ItemSeparatorComponent={Seperator}
      scrollEnabled={false}
    />
    <View style={{ height: 16 }} />
    <Text style={styles.header}>Classic Figures</Text>
    <FlatList
      data={people_for_use.filter(
        (person) => person.aoi === "Classics"
      )}
      renderItem={displayPerson}
      keyExtractor={(item) => `person-${item.id}`}
      ItemSeparatorComponent={Seperator}
      scrollEnabled={false}
    />
  </ScrollView>
)
}

export default history

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42a4f580',
  },
  Loc: {
    padding: 15,
    backgroundColor: '#E3F2FD', 
    borderBottomWidth: 1,
    borderBottomColor: '#42A5F5', 
  },
  separatorStyle: {
    height: 1,
    backgroundColor: '#42A5F5',
  },
  blurb: {
    marginTop: 8,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#263238', 
  },
  button: {
    backgroundColor: '#90CAF9',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});