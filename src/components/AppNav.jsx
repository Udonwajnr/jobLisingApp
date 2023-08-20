import { useContext } from "react"
import { View,ActivityIndicator } from "react-native"
import { NavigationContainer } from "@react-navigation/native"


export default function(){
    return (
        <NavigationContainer>
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
        </NavigationContainer>
    )
}