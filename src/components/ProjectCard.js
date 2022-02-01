import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import { Card, Text } from 'react-native-elements';
import placeholder from '../../assets/preview/placeholder.png';

export default function ProjectCard ({ containerStyle, title, description, link, img }) {
  return (
    <Card containerStyle={[styles.outerContainer, containerStyle]} wrapperStyle={styles.innerContainer}>
      <Card.Image
        source={img || placeholder}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.info}>
        <Card.Title>{title}</Card.Title>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity onPress={() => handleLinkPress(link)}>
          <Text style={styles.hyperlink}>Open This Project</Text>  
        </TouchableOpacity>  
      </View>
    </Card>
  );
}

const handleLinkPress = (link) => {
  if (Platform.OS === 'ios') {
    WebBrowser.openBrowserAsync(link);
  } else if (Platform.OS === 'web') {
    window.open(link);
  } else {
    Linking.openURL(link);
  }
}

const styles = StyleSheet.create({
  info: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 15,
  },
  divider: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  description: {
    marginBottom: 15,
  },
  hyperlink: {
    color: "#0d6efd",
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    
  },
  outerContainer: {
    width: 250,
    padding: 0,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5.0,
    },
    shadowRadius: 10.0,
    shadowOpacity: 2,
  },
  innerContainer: {
    padding: 0,
  }
})