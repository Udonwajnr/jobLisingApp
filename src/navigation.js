import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screen/HomeScreen"
import { COLORS, icons, images } from "./constants"
import { ScreenHeaderBtn } from "./components"
import TestScreen from "./screen/TestScreen"
import JobDetailScreen from "./screen/JobDetailsScreen"
import SearchScreen from "./screen/SearchScreen"

const Stack = createNativeStackNavigator()

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerStyle:{backgroundColor:COLORS.lightWhite},
                        headerShadowVisible:false,
                        headerTitle:'',
                        headerLeft:()=>(
                            <ScreenHeaderBtn iconUrl={icons.menu} dimension={"60%"}/>
                            ),
                            headerRight:()=>(
                                <ScreenHeaderBtn iconUrl={images.profile} dimension={"60%"}/>
                        ),
                    }}
                name="Home" component={HomeScreen}/>
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