import React, { useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const CENTER_MAP = {
  latitude: 37.15727,
  longitude: 22.32834,
  latitudeDelta: 10,
  longitudeDelta: 10,
};

export default function Index() {
  const mapRef = useRef<MapView>(null);
  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        ref={mapRef}
        initialRegion={CENTER_MAP}
        provider={PROVIDER_GOOGLE}
      ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
