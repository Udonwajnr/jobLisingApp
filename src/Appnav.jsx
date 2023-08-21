import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screen/HomeScreen"
import JobDetailScreen from "./screen/JobDetailsScreen"
import SearchScreen from "./screen/SearchScreen"
import { COLORS, icons } from "./constants"
import { ScreenHeaderBtn } from "./components"
import LogoutBtn from "./components/LogoutButton"


const Stack = createNativeStackNavigator()


export default function AppNav(){
    return (
        <Stack.Navigator>
                            <Stack.Screen
                                options={{
                                    headerStyle:{backgroundColor:COLORS.lightWhite},
                                    headerShadowVisible:false,
                                    headerTitle:'',
                                    headerTitleAlign:'center',
                                    // headerLeft:()=>(
                                    //     <ScreenHeaderBtn iconUrl={icons.menu} dimension={"60%"}/>
                                    //     ),
                                        headerRight:()=>(
                                            <LogoutBtn/>
                                    ),
                                }}
                                name="Home" component={HomeScreen}
                                />

                          
                            <Stack.Screen name="Search" component={SearchScreen}
                            options={{
                                headerStyle:{backgroundColor:COLORS.lightWhite},
                                headerShadowVisible:false,
                                headerTitle:'Search',
                                headerTitleAlign:"center",
                            }}
                            />
                              <Stack.Screen name="JobDetails" component={JobDetailScreen}
                            options={{
                                headerStyle:{backgroundColor:COLORS.lightWhite},
                                headerShadowVisible:false,
                                headerTitle:'Job Details',
                                headerTitleAlign:"center",

                                // headerLeft:()=>(
                                //     <ScreenHeaderBtn iconUrl={icons.left} dimension={"60%"}/>
                                // ),
                            //     headerRight:()=>(
                            //         <ScreenHeaderBtn iconUrl={icons.share} dimension={"60%"}/>
                            // ),
                            }}
                            />
        </Stack.Navigator>
    )
}