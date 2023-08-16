import React,{useState} from "react"
import { View,Text,ScrollView,SafeAreaView } from "react-native"
import { Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome } from "../components"
import {COLORS,icons,images,SIZES} from "../constants"
import { useNavigation, useRoute } from "@react-navigation/native"
export default function HomeScreen({navigation}){

    const [searchTerm, setSearchTerm] = useState("");
    return(
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
            <ScrollView style={{flex:1,padding:SIZES.medium}}>
            <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            navigation={navigation}
            handleClick={() => {
              if (searchTerm) {
                navigation.push("Search",{searchTerm})
              }
            }}
          />
                <Popularjobs navigation={navigation}/>
                <Nearbyjobs navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
    )
}