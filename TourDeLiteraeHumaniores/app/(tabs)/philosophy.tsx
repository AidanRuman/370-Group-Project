import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

interface Locations {
  id: number;
  name: string;
}

const DATA: Locations[]= [
  {
    id: 1,
    name: "Socarates/Plato",
  },
  {
    id: 2,
    name: "Aristotle",
  },
  {
    id: 3,
    name: "machiavelli",
  },
  {
    id: 4,
    name: "Cicero",
  },
  {
    id: 5,
    name: "Thomas Aquinas",
  },
  {
    id: 6,
    name: "Marcus Aurelius",
  },
]



const philosophy = () => {

  const displayLocation = ({ item }: {item: Locations}) => (
  <View style={styles.Loc}>
    <Text>{item.name}</Text>
  </View>
  )
  const Seperator = () => (
      <View style={styles.separatorStyle}/>
  );
  return (
    <FlatList
          data={DATA}
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
  }
})