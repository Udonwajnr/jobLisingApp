import { Text,View,TextInput,TouchableOpacity,SafeAreaView } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../context/context";
import LoginScreen from "./LoginScreen";

export default function SetNewPasswordScreen(){
    const [password,setPassword] = useState('')
    const {updatePassword} = useContext(AuthContext)
    const {changedPassword} = useContext(AuthContext)
    console.log(changedPassword)
    if(changedPassword){
        return(
            <LoginScreen/>
        )
    }
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={{flexDirection:"col",flex:1, justifyContent:'center', alignItems:"center",padding:30 ,width:"100%",}}>                
              <View>
                <Text style={{color:'black'}}> New Password</Text>
                    <TextInput autoCapitalize="none"  placeholder="Password" value={password} onChangeText={(password)=>setPassword(password)} placeholderTextColor={"#a3a3a3"} secureTextEntry={true} style={{height:40,borderWidth:1,marginVertical:6 ,color:'black',paddingHorizontal:10}} />
                </View>
                     
                <TouchableOpacity  style={{backgroundColor:'blue',width:"100%",paddingHorizontal:5,paddingVertical:7}}>
                    <Text style={{color:"white",textAlign:'center',fontSize:16}} onPress={()=>updatePassword(password)}>Reset Password</Text>
                </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}