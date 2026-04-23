import { useAuth } from "@/context/context";
import React, { useRef } from "react";
import { Text, View, StyleSheet, Pressable, Button } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { locations_for_use, Locations } from "@/data/locations";

const CENTER_MAP = {
  latitude: 37.15727,
  longitude: 22.32834,
  latitudeDelta: 10,
  longitudeDelta: 10,
};

export default function Index() {

  const {logout} = useAuth()

  const mapRef = useRef<MapView>(null);

  const fitAllLocations = () => {
    mapRef.current?.fitToCoordinates(
      locations_for_use.map((location) => ({
        latitude: location.latitude,
        longitude: location.longitude,
      })),
      {
        edgePadding: { top: 100, bottom: 100, left: 100, right: 100 },
        animated: true,
      },
    );
  };


  const recenterOnGreece = () => {
    mapRef.current?.animateToRegion(CENTER_MAP, 300);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        ref={mapRef}
        initialRegion={CENTER_MAP}
        provider={PROVIDER_GOOGLE}
      >
        {locations_for_use.map((location) => (
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

      <Pressable style={styles.button} onPress={fitAllLocations}>
        <Text>Fit All Locations</Text>
      </Pressable>
      
      <Pressable style={styles.recenterButton} onPress={recenterOnGreece}>
        <Text>Recenter Map</Text>
      </Pressable>

      <Pressable style={styles.logoutButton} onPress={logout}>
        <Text>Logout</Text>
      </Pressable>

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
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  recenterButton: {
    position: "absolute",
    bottom: 70,
    right: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  logoutButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  }
});
