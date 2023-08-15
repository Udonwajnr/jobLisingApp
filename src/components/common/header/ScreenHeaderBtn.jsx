import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={navigation.goBack}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
