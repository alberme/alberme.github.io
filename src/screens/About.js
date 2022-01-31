import { View, StyleSheet, ScrollView, Platform } from 'react-native'
import { Divider, Text } from 'react-native-elements';
import globalStyles from '../globalStyles';

import Footer from '../components/Footer';

export default function About () {

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollView}>
      <View style={globalStyles.main}>
        <Text h2 style={globalStyles.headerContainer}>Albert Martinez</Text>
        <View style={[globalStyles.textContainer, {height: Platform.OS === 'web' ? 300: 400}]}>
          <Text>
            A passionate self-taught developer. Ever since I was a teenager, I have always expressed interest in technology.
          </Text>
          <Text>
            Back in the university days, coding was a hobby that I enjoyed in my free time.

            The satisfaction of creating cool features and solving problems with code is euphoric.
            Then one day, I decided it's time to turn my hobby into a career.
            I grew a passion for modern web development - both backend and frontend - after I learned JavaScript, React, NodeJS, and the various innovative libraries that supplement these development technologies.
            In the future, I will expand my passion to native mobile apps and beyond once I get the proper development hardware to do so.
          </Text>
          <Text>
            When I am not at my computer, I am either enjoying nature, caring for my ducks, exercising, or listening to indie music.
          </Text>
        </View>      
      </View>
      <Footer />
    </ScrollView>
  );
}

