import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import React, { useContext, useEffect, useState } from "react"
import { AuthContext, AuthProvider } from "./context/context"
import { ActivityIndicator, View ,Text} from "react-native"

import linking from "./Linking"
import AppNav from "./Appnav"
import AuthNav from "./AuthNav"

export default function Navigation(){
    const {isLoading,userToken} = useContext(AuthContext)

    if(isLoading){
        <View>
            <ActivityIndicator size={"large"}/>
        </View>
    }
    return(
            <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
               { 
               userToken !==null?
                    <AppNav/>
                        :
                <AuthNav/> 
            }               
            </NavigationContainer>
    )
}