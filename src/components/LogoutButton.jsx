import { Text ,TouchableOpacity, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
const LogoutBtn =()=>{
   const navigation = useNavigation()
   
    const clearAuth= async()=>{
        await AsyncStorage.clear()
    }
    useEffect(()=>{
        clearAuth()
    },[])
    return(

        <View style={{backgroundColor:'red', padding:5, borderRadius:10}}>
            <TouchableOpacity onPress={clearAuth}>
                <Text style={{color:'white'}}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}
export default LogoutBtn