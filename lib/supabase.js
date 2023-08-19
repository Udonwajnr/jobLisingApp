import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {SUPERBASE_ANON_KEY,SUPERBASE_URL} from "@env"
import 'react-native-url-polyfill/auto'

export const supabase = createClient(SUPERBASE_URL, SUPERBASE_ANON_KEY, {
 auth: {
   storage: AsyncStorage,
   autoRefreshToken: true,
   persistSession: true,
   detectSessionInUrl: false,
 },
});