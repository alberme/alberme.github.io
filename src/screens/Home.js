import { View, StyleSheet, Platform, ScrollView } from 'react-native';
import { Text, Avatar, Divider } from 'react-native-elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Card from '../components/ProjectCard';
import Footer from '../components/Footer';
import headshotImg from '../../assets/preview/headshot.jpeg';
import ecard from '../../assets/preview/ecard.jpg';
import decidr from '../../assets/preview/decidr.png';
import todolist from '../../assets/preview/todolist.png';
import globalStyles from '../globalStyles';

const cardList = [
  ['Todo-List', 'My first dive into React Native featuring a todo-list app', 'https://github.com/alberme/todolist-expo-app', todolist],
  ['Decidr', 'Roll the dice and select a random item from your list!', 'https://alberme.github.io/decidr', decidr],
  ['E-card', 'A reshareable digital holiday card. Customize and share with your loved ones!', 'https://alberme.github.io/ecard/', ecard]
]

export default function Home () {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView contentContainerStyle={globalStyles.scrollView}>
      <View style={[globalStyles.main, { paddingTop: insets.top }]}>
        <View style={styles.profileContainer}>
          <View style={styles.profileAvatar}>
            <Avatar
              size={128}
              source={headshotImg}
              rounded
              containerStyle={{ borderWidth: 1, borderColor: 'rgb(190, 190, 190)' }}
            />
          </View>
          <View style={styles.profileDescription}>
            <Text h1>Hi 👋 I'm Albert</Text>
            <Text h4>A passionate web &amp; mobile app developer</Text>
            <Text h4>based in California</Text>
          </View>
        </View>
        <View style={styles.projectsContainer}>
          <Divider style={globalStyles.divider}/>
          <View xs={12} style={styles.projectsHeader}>
            <Text h2>Featured Projects</Text>
          </View>
          <View style={styles.projectsCards}>
          {
            cardList.map(([ title, description, link, img ], i) => (
              <Card containerStyle={{ margin: 30 }} key={i} title={title} description={description} link={link} img={img} />
            ))
          }
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  profileAvatar: {
    marginBottom: 10,
  },
  profileDescription: {
    padding: 10,
    marginVertical: 10,
    flexShrink: 1
  },
  projectsContainer: {
    marginVertical: 10,
  },
  projectsHeader: {
    marginVertical: 10,
    alignItems: 'center',
  },
  projectsCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
})