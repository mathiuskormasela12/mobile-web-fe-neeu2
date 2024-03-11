import { Button } from '@Components'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App (): React.ReactNode {
  return (
    <View style={styles.container}>
      <Text className="text-2xl text-red-600">Hello World!</Text>
      <Button>
        Hello
      </Button>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
