import React, { useEffect } from 'react'
import { Platform, Text } from 'react-native'
import Navigation from './src/navigation'
import SplashScreen from 'react-native-splash-screen'
const App = () => {
  useEffect(()=>{
    if(Platform.OS=== "android")
    SplashScreen.hide();
  },[])
  return (
    <Navigation/>
    // <Text>Hello</Text>
  )
}

export default App