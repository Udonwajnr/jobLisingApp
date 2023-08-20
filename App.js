import React, { useEffect } from 'react'
import { Platform, Text } from 'react-native'
import Navigation from './src/navigation'
import SplashScreen from 'react-native-splash-screen'
import { AuthProvider } from './src/context/context'
const App = () => {
  useEffect(()=>{
    if(Platform.OS=== "android")
    SplashScreen.hide();
  },[])
  return (
    <AuthProvider>
      <Navigation/>
    </AuthProvider>
    // <Text>Hello</Text>
  )
}

export default App