import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, StyleSheet } from "react-native";
import { Text, Icon } from 'react-native-elements';

import Footer from "../components/Footer";
import globalStyles from "../globalStyles";

export default function Drawer(props) {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.main, { paddingTop: top }]}>
      <View style={[globalStyles.headerContainer, styles.header]}>
        <Icon name="guitar" type="font-awesome-5" iconStyle={[globalStyles.icon, { color: '#C96600' }]} />
        <Text h2>Portfolio</Text>
      </View>
      <DrawerContentScrollView { ...props }>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
      <View>
        <Footer />
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingTop: 10,
  }
})