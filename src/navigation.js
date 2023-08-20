import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screen/HomeScreen"
import { COLORS, icons } from "./constants"
import { ScreenHeaderBtn } from "./components"
import JobDetailScreen from "./screen/JobDetailsScreen"
import SearchScreen from "./screen/SearchScreen"
import RegisterScreen from "./screen/RegisterScreen"
import LoginScreen from "./screen/LoginScreen"
import React, { useContext, useEffect, useState } from "react"
import LogoutBtn from "./components/LogoutButton"
import { AuthContext, AuthProvider } from "./context/context"
import { ActivityIndicator, View } from "react-native"

const Stack = createNativeStackNavigator()

export default function Navigation(){
    const {isLoading,userToken} = useContext(AuthContext)

    if(isLoading){
        <View>
            <ActivityIndicator size={"large"}/>
        </View>
    }
    return(
            <NavigationContainer>
                <Stack.Navigator>
               { 
               userToken !==null?
                            <>
                            <Stack.Screen
                                options={{
                                    headerStyle:{backgroundColor:COLORS.lightWhite},
                                    headerShadowVisible:false,
                                    headerTitle:'',
                                    headerTitleAlign:'center',
                                    headerLeft:()=>(
                                        <ScreenHeaderBtn iconUrl={icons.menu} dimension={"60%"}/>
                                        ),
                                        headerRight:()=>(
                                            <LogoutBtn/>
                                    ),
                                }}
                                name="Home" component={HomeScreen}
                                />

                            <Stack.Screen name="JobDetails" component={JobDetailScreen}
                            options={{
                                headerStyle:{backgroundColor:COLORS.lightWhite},
                                headerShadowVisible:false,
                                headerTitle:'',
                                headerLeft:()=>(
                                    <ScreenHeaderBtn iconUrl={icons.left} dimension={"60%"}/>
                                ),
                                headerRight:()=>(
                                    <ScreenHeaderBtn iconUrl={icons.share} dimension={"60%"}/>
                            ),
                            }}
                            />
                            <Stack.Screen name="Search" component={SearchScreen}
                            options={{
                                headerStyle:{backgroundColor:COLORS.lightWhite},
                                headerShadowVisible:false,
                                headerTitle:'Search',
                                headerTitleAlign:"center",
                            }}
                            />
                            </>
                        :

                <>  
                            <Stack.Screen
                                options={{
                                    headerShadowVisible:false,
                                    headerTitle:'Login',
                                    headerTitleAlign:"center",
                                    headerLeft:()=>''
                                }} name="Login" component={LoginScreen}/>
                        
                                    
                                    <Stack.Screen name="Signup"
                                    component={RegisterScreen}
                                    options={{
                                        headerStyle:{backgroundColor:COLORS.lightWhite},
                                        headerShadowVisible:false,
                                        headerTitle:'Sign Up',
                                        headerTitleAlign:"center",
                                        headerLeft:()=>''
            
                                    }}
                                    />
            
                </>

            }
               
                </Stack.Navigator>
            </NavigationContainer>
    )
}