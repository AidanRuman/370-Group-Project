import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";


const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#6200ee",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "map",
          tabBarLabel: "map",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? "map" : "map-outline"} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="historyMyth"
        options={{
          title: "Classics",
          tabBarLabel: "Classics",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? "book" : "book-outline"} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(philosophy)"
        options={{
          title: "philosophy",
          tabBarLabel: "Philosophy",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? "person" : "person-outline"} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})