import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
     <Stack>
        <Stack.Screen name='philosophy'/>
        <Stack.Screen name='[locationId]' options={{ title: 'Philosophy Location' }} />
     </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})