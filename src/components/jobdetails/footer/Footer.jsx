import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";
import  Share  from "react-native-share";

const Footer = ({ link,titleJob }) => {
  const url = link;
  const title = titleJob;
  // const message = "Please check this out.";
  const options = {
    title,
    url,
    // message,
  };

  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}  onPress={
        async () => {
          await share();
        }}
        >
        <Image
          source={icons.share}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(link)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
