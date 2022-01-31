import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import CustomDrawer from './src/navigation/CustomDrawer';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Resume from './src/screens/Resume';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            initialRouteName='Home'
          >
            <Drawer.Screen name="Home" component={Home} options={{
                headerShown: true,
                headerStyle: styles.drawerHeader,
                headerTitle: 'Albert M',
              }}
            />
            <Drawer.Screen name="About" component={About} options={{
                headerShown: true,
                headerStyle: styles.drawerHeader,
                headerTitle: 'About',
              }}
            />
            <Drawer.Screen name="Resume" component={Resume} options={{
                headerShown: true,
                headerStyle: styles.drawerHeader,
                headerTitle: 'Resume',
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
        <StatusBar style='auto' />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  drawerHeader: {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
  }
});