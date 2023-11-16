import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text style={styles.text}>Hiii</Text>
      <Text style={styles.text}>Hiii my name is Shubham</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  text:{
    fontSize:30,
    fontFamily:'Poppins-ExtraBold'
  }
})