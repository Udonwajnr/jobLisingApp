import React,{useContext, useEffect, useState} from "react"
import { Text,SafeAreaView,Alert, View,TextInput,Button,KeyboardAvoidingView, TouchableOpacity } from "react-native"
import { supabase } from "../../lib/supabase"
import { AuthContext } from "../context/context"

export default function RegisterScreen({navigation}){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const {signUp} = useContext(AuthContext)

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flexDirection:"col",flex:1, justifyContent:'center', alignItems:"center",padding:30 ,width:"100%"}}>
                <TextInput autoCapitalize="none"  placeholder="Email" value={email} inputMode="email" onChangeText={(email)=>setEmail(email)} placeholderTextColor={"black"} autoComplete="email" style={{height:40,borderWidth:1,marginVertical:6,color:'black',paddingHorizontal:10}} />
                <TextInput autoCapitalize="none" placeholder="Password" value={password} onChangeText={(password)=>setPassword(password)} placeholderTextColor={"black"} secureTextEntry={true} style={{height:40,borderWidth:1,marginVertical:6 ,color:'black',paddingHorizontal:10}} />
                <TouchableOpacity  style={{backgroundColor:'blue',width:"100%",paddingHorizontal:5,paddingVertical:7}} onPress={()=>signUp(email,password)}>
                    <Text style={{color:"white",textAlign:'center',fontSize:16}}>Sign up</Text>
                </TouchableOpacity>
                <View style={{marginTop:14}}>
                    <Text style={{color:"black"}}>
                        Already have an Account?
                        <Text onPress={()=>navigation.push("Login")} style={{color:"blue"}}> Login</Text>
                     </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}