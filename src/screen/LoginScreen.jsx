import React,{useContext, useEffect, useState} from "react"
import { Text,SafeAreaView,Alert, View,TextInput,Button,KeyboardAvoidingView,TouchableOpacity } from "react-native"
import { supabase } from "../../lib/supabase"
import { AuthContext } from "../context/context"

export default  function  LoginScreen({navigation}){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState()
    const [success,setSuccess] = useState(false)

    const {login} = useContext(AuthContext)
    
    // const Login =async()=>{
   
    // }

    
    useEffect(()=>{
        
    },[])

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flexDirection:"col",flex:1, justifyContent:'center', alignItems:"center",padding:30 ,width:"100%"}}>
                <TextInput autoCapitalize="none"  placeholder="Email" value={email} inputMode="email" onChangeText={(email)=>setEmail(email)} placeholderTextColor={"black"} autoComplete="email" style={{height:40,borderWidth:1,marginVertical:6,color:'black',paddingHorizontal:10}} />
                <TextInput autoCapitalize="none" placeholder="Password" value={password} onChangeText={(password)=>setPassword(password)} placeholderTextColor={"black"} secureTextEntry={true} style={{height:40,borderWidth:1,marginVertical:6 ,color:'black',paddingHorizontal:10}} />
                <TouchableOpacity  style={{backgroundColor:'blue',width:"100%",paddingHorizontal:5,paddingVertical:7}} onPress={()=>login(email,password)}>
                    <Text style={{color:"white",textAlign:'center',fontSize:16}}>Login</Text>
                </TouchableOpacity>
                <View style={{marginTop:14}}>
                    <Text style={{color:"black"}}>
                        Don't have an Account?
                       
                        <Text onPress={()=>navigation.navigate("Signup")} style={{color:"blue"}}> Sign up</Text>
                     </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}