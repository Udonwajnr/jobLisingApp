import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screen/HomeScreen"
import { COLORS, icons, images } from "./constants"
import { ScreenHeaderBtn } from "./components"
import JobDetailScreen from "./screen/JobDetailsScreen"
import SearchScreen from "./screen/SearchScreen"
import RegisterScreen from "./screen/RegisterScreen"
import LoginScreen from "./screen/LoginScreen"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import LogoutBtn from "./components/LogoutButton"

const Stack = createNativeStackNavigator()

export default function Navigation(){
    const [auth,setAuth] = useState()
    
    const getData = async ()=>{
        const getDat = await AsyncStorage.getItem("data")
        const currentUser = JSON.parse(getDat);
        // console.log(currentUser,"its done");
        setAuth(currentUser)
    }

    const clearAuth= async ()=>{
        await AsyncStorage.clear()
    }


useEffect(()=>{
    getData()
},[])
    return(
        <NavigationContainer>
            <Stack.Navigator>
                {
                    auth ?
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
                 name="Home" component={HomeScreen}/>:
                <Stack.Screen
                    options={{
                        headerShadowVisible:false,
                        headerTitle:'Login',
                        headerTitleAlign:"center",
                        headerLeft:()=>''
                    }} name="Login" component={LoginScreen}/>
            
                }
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}