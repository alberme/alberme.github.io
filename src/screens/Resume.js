import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, Divider } from 'react-native-elements';

import Footer from '../components/Footer';
import globalStyles from '../globalStyles';
import constants from '../constants';

export default function About () {
  const { resume } = constants;
  
  return (
    <ScrollView contentContainerStyle={globalStyles.scrollView}>
      <View style={[globalStyles.main, globalStyles.textContainer]}>
        <Text h2 style={styles.headerText}>Profile</Text>
        <Text>{resume.intro}</Text>

        <Divider style={styles.divider} />
        <Text h2 style={styles.headerText}>Skills</Text>
        {
          resume.skills.map((skill, i) => (
            <Text style={styles.listText} key={i}>{`\u2022 ${skill}`}</Text>
          ))
        }

        <Divider style={styles.divider} />
        <Text h2 style={styles.headerText}>Experience</Text>

        {
          resume.experience.map((experience, i) => (
            <View style={[styles.experience]} key={i}>
              <Text style={styles.resumeTitle} h4>{experience.title}</Text>
              <Text style={styles.experienceEmployer}>{experience.employer}</Text>
              <Text style={styles.experienceYear}>{experience.year}</Text>
              {
                experience.duties.map((duty, j) => (
                  <Text style={styles.listText} key={j}>{`\u2022 ${duty}`}</Text>
                ))
              }
            </View>
          ))
        }
        <Divider style={styles.divider} />        
        <Text h2 style={styles.headerText}>Education</Text>

        <Text style={styles.resumeTitle} h4>{resume.education.name}</Text>
        <Text style={styles.experienceYear}>{resume.education.year}</Text>
        {
          resume.education.details.map((detail, i) => (
            <Text style={styles.listText} key={i}>{`\u2022 ${detail}`}</Text>
          ))
        }
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    ...globalStyles.headerContainer,
    marginBottom: 20,
    color: '#44a6c6'
  },
  divider: {
    ...globalStyles.divider,
    marginLeft: 0,
    marginRight: 50,
  },
  listText: {
    paddingLeft: 20,
    marginBottom: 5,
  },
  experience: {
    marginBottom: 20,
  },
  resumeTitle: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  experienceEmployer: {
    marginBottom: 5,
    fontWeight: '600',
  },
  experienceYear: {
    marginBottom: 10,
  }
})