import { useContext } from "react"
import { AuthContext } from "./context/context"
import { NavigationContainer } from "@react-navigation/native"
import RegisterScreen from "./screen/RegisterScreen"
import LoginScreen from "./screen/LoginScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { COLORS, icons } from "./constants"
import ForgotPasswordScreen from "./screen/ForgotPasswordScreen"
import SetNewPasswordScreen from "./screen/SetNewPasswordScreen"


const Stack = createNativeStackNavigator()

export default function AuthNav (){
    // const {changedPassword} = useContext(AuthContext)
    
    return(
        <Stack.Navigator>
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
                                    <Stack.Screen name="ForgotPassword"
                                    component={ForgotPasswordScreen}
                                    options={{
                                        headerStyle:{backgroundColor:COLORS.lightWhite},
                                        headerShadowVisible:false,
                                        headerTitle:'Forget Password',
                                        headerTitleAlign:"center",
                                        headerLeft:()=>''
            
                                    }}
                                    />
                                    <Stack.Screen name="SetNewPassword"
                                    component={SetNewPasswordScreen}
                                    options={{
                                        headerStyle:{backgroundColor:COLORS.lightWhite},
                                        headerShadowVisible:false,
                                        headerTitle:'SetNewPassword',
                                        headerTitleAlign:"center",
                                        headerLeft:()=>''
            
                                    }}
                                    />
                </Stack.Navigator>
    )
}