import React, { useState } from "react"
import { RefreshControl, ScrollView, Text,SafeAreaView, View ,ActivityIndicator} from "react-native"
import { COLORS,SIZES } from "../constants"
import { useRoute } from "@react-navigation/native"
import useFetch from "../hook/useFetch"
import { JobAbout,Specifics,JobFooter,JobTabs,Company } from "../components"

export default function JobDetailScreen({ navigation }){
    const route = useRoute()
    const tabs = ["About", "Qualifications", "Responsibilities"];
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [refreshing ,setRefreshing] = useState(false)

    const { data, isLoading, error, refetch } = useFetch("job-details", {
        job_id: route.params?.job?.job_id || route.params?.item?.job_id,
      });
    
   const onRefresh=()=>{

   }
    const displayTabContent = () => {
        switch (activeTab) {
          case "Qualifications":
            return (
              <Specifics
                title='Qualifications'
                points={data[0]?.job_highlights?.Qualifications ?? ["N/A"]}
              />
            );
    
          case "About":
            return (
              <JobAbout info={data[0]?.job_description ?? "No data provided"} />
            );
    
          case "Responsibilities":
            return (
              <Specifics
                title='Responsibilities'
                points={data[0]?.job_highlights?.Responsibilities ?? ["N/A"]}
              />
            );
    
          default:
            return null;
        }
      };

    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
                  {
                    isLoading
                    ?
                    <ActivityIndicator size='large' color={COLORS.primary} />
                    :
                    <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                            <Company
                            companyLogo={data[0]?.employer_logo}
                            jobTitle={data[0]?.job_title}
                            companyName={data[0]?.employer_name}
                            location={data[0]?.job_country}
                            />

                            <JobTabs
                                tabs={tabs}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />

                        {displayTabContent()}
                    </View>
            }
            </ScrollView>    
                <JobFooter link={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'} titleJob={data[0]?.job_title}/>
            </>
        </SafeAreaView>
    )
} 