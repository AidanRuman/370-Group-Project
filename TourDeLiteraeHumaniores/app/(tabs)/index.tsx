import { useAuth } from "@/context/context";
import React, { useRef } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { locations_for_use } from "@/data/data";
import { useRouter } from "expo-router";

const CENTER_MAP = {
  latitude: 37.15727,
  longitude: 22.32834,
  latitudeDelta: 10,
  longitudeDelta: 10,
};

export default function Index() {

  const {logout} = useAuth()
  const router = useRouter();

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

  const openLocationInList = (locationId: number, aoi: string) => {
    if (aoi === "Classics") {
      router.push({
        pathname: "/(tabs)/(history)/[locationId]",
        params: { locationId: String(locationId) },
      });
      return;
    }

    if (aoi === "Philosophy") {
      router.push({
        pathname: "/(tabs)/(philosophy)/[locationId]",
        params: { locationId: String(locationId) },
      });
    }
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
            <Callout
              tooltip={true}
              onPress={() => openLocationInList(location.id, location.aoi)}
            >
              <View style={styles.Callout}>
                <Text style={styles.calloutTitle}>{location.name}</Text>
                <Text style={styles.calloutHint}>Tap to open in list</Text>
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
  calloutTitle: {
    fontWeight: "600",
  },
  calloutHint: {
    marginTop: 4,
    color: "#475569",
    fontSize: 12,
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

