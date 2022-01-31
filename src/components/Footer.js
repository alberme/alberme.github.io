import * as WebBrowser from 'expo-web-browser';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import globalStyles from '../globalStyles';
import constants from '../constants';

export default function Footer() {
  return (
    <LinearGradient
      colors={['#FF4687', '#82EAFF']}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.footer}
    >
      <View style={styles.content}>
        <TouchableOpacity onPress={() => handleLinkPress(constants.github)}>
          <Icon name="github-square" type="font-awesome-5" iconStyle={globalStyles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLinkPress(constants.linkedin)}>
          <Icon name="linkedin" type="font-awesome-5" iconStyle={globalStyles.icon} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  ); 
}

const handleLinkPress = (link) => {
  WebBrowser.openBrowserAsync(link);
}

const styles = StyleSheet.create({
  footer: {
    minHeight: 80,
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke'
  },
  content: {
    width: '50%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
})
