import { Text ,TouchableOpacity, View} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/context";

const LogoutBtn =()=>{
    const {logout} = useContext(AuthContext)
    return(

        <View style={{backgroundColor:'red', padding:5, borderRadius:10}}>
            <TouchableOpacity onPress={()=>logout()}>
                <Text style={{color:'white'}}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}
export default LogoutBtn