import { FlatList, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { locations_for_use, Locations, people_for_use, People  } from '@/data/data';
import { useLocalSearchParams } from 'expo-router';

const philosophy = () => {
  const { locationId } = useLocalSearchParams<{ locationId?: string }>();
  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(null);
  const [selectedPersonId, setSelectedPersonId] = useState<number | null>(null);

  useEffect(() => {
    if (!locationId) {
      return;
    }

    const parsedLocationId = Number(locationId);
    if (!Number.isNaN(parsedLocationId)) {
      setSelectedLocationId(parsedLocationId);
    }
  }, [locationId]);

const Seperator = () => (
    <View style={styles.separatorStyle}/>
);

  const displayLocation = ({ item }: {item: Locations}) => (
  <Pressable
      style={[styles.Loc, selectedLocationId === item.id && styles.selectedLoc]}
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
      <Text style={styles.header}>Philosophy Locations</Text>
      <FlatList
        data={locations_for_use.filter(
          (location) => location.aoi === "Philosophy"
        )}
        renderItem={displayLocation}
        keyExtractor={(item) => `location-${item.id}`}
        ItemSeparatorComponent={Seperator}
        scrollEnabled={false}
      />
      <View style={{ height: 16 }} />
      <Text style={styles.header}>Philosophers</Text>
      <FlatList
          data={people_for_use.filter(
            (person) => person.aoi === "Philosophers"
          )}
          renderItem={displayPerson}
          keyExtractor={(item) => `person-${item.id}`}
          ItemSeparatorComponent={Seperator}
          scrollEnabled={false}
      />
    </ScrollView>
  );
}

export default philosophy

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
  selectedLoc: {
    backgroundColor: '#BBDEFB',
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
})
