import { Text,View,TextInput,TouchableOpacity,SafeAreaView } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../context/context";


export default function ForgotPasswordScreen(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    // const [forgetToken,setForgetToken] = useState(false)

    const {forgetToken,forgetPassword,updatePassword} = useContext(AuthContext)

    if(forgetToken){
        return(
            <SafeAreaView style={{flex:1}}>
            <View style={{flexDirection:"col",flex:1, justifyContent:'center', alignItems:"center",padding:30 ,width:"100%",}}>                
                <Text style={{color:"black"}}>
                    A reset password Link has been sent to your Email.
                    Please click the link to Reset password
                
                </Text>
            </View>
        </SafeAreaView>      
        )
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flexDirection:"col",flex:1, justifyContent:'center', alignItems:"center",padding:30 ,width:"100%",}}>
                <View>
                    <Text style={{color:'black'}}>Email</Text>
                    <TextInput autoCapitalize="none"  placeholder="johndoe@gmail.com" value={email} inputMode="email" onChangeText={(email)=>setEmail(email)} placeholderTextColor={"#a3a3a3"} autoComplete="email" style={{height:40,borderWidth:1,marginVertical:6,color:'black',paddingHorizontal:10}} />
                    <TouchableOpacity  style={{backgroundColor:'blue',paddingHorizontal:5,paddingVertical:7}} onPress={()=>forgetPassword(email)}>
                        <Text style={{color:"white",textAlign:'center',fontSize:16}}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}