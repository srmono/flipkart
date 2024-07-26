import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const index = () => {
  return (
    // <Redirect href="/(authenticate)/login" />
    <Redirect href="/(tabs)/home" />
    // <SafeAreaView>
    //   <Text>Home Screen</Text> 
    // </SafeAreaView>
  )
}

export default index 

const styles = StyleSheet.create({})