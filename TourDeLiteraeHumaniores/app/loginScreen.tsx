import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '@/context/context'
import { Link } from 'expo-router'


export default function loginScreen() {
  const { isAuth, login, logout, user } = useAuth()
  const [token, setToken] = useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tour De Literae Humaniores</Text>
      <TextInput
        placeholder="Enter a Username"
        value={token}
        onChangeText={setToken}
      />
      <Pressable style={styles.button} onPress={() => (isAuth ? logout() : login(token))}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Link href="/" dismissTo style={styles.button}>
        <Text style={styles.buttonText}>Go to home screen</Text>
      </Link>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 15,
    marginBottom: 20,
    fontFamily: "Georgia",
  },
  enterUsername: {
      padding: 50,
  },
  button: {
    marginTop: 15,
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    width: 250,
    
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});