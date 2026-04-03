import React, { useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";

const CENTER_MAP = {
  latitude: 37.15727,
  longitude: 22.32834,
  latitudeDelta: 10,
  longitudeDelta: 10,
};

const locations = [
  {
    id: 1,
    name: "The Colchis, the land of the Golden Fleece and Medea",
    latitude: 42.2774,
    longitude: 42.7054
  },
  {
    id: 2,
    name: "The Temple of Delphi",
    latitude: 38.4822,
    longitude: 22.5011
  },
  {
    id: 3,
    name: "The River Styx",
    latitude: 37.9837,
    longitude: 22.2025
  },
  {
    id: 4,
    name: "The Battle of Marathon",
    latitude: 38.1180,
    longitude: 23.9783
  },
  {
    id: 5,
    name: "The Scicilian Expedition",
    latitude: 37.0833,
    longitude: 15.2833
  },
  {
    id: 6,
    name: "The City of Carthage",
    latitude: 36.8528,
    longitude: 10.3233
  },
  {
    id: 7,
    name: "The Lyceum",
    latitude:  37.9711,
    longitude: 23.7394
    //37.9711077822 23.739432042
  },
  {
    id: 8,
    name: "The Prison of Socrates",
    latitude:  37.9694,
    longitude: 23.7210
    // 37.9694° N, 23.7210° E
  },
  {
    id: 9,
    name: "Florence, Home of Machiavelli",
    latitude:  43.7700,
    longitude: 11.2577
    //43.7700° N, 11.2577° E
  }


]

export default function Index() {
  const mapRef = useRef<MapView>(null);
  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        ref={mapRef}
        initialRegion={CENTER_MAP}
        provider={PROVIDER_GOOGLE}
      >
        {locations.map((location) => (
          <Marker
        key={location.id}
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        >
          <Callout tooltip={true}>
              <View style={styles.Callout}>
                <Text>{location.name}</Text>
              </View>
          </Callout>
        </Marker>
      ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Callout: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  }
});
