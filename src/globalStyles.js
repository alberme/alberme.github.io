import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  main: {
    flex: 1,
    height: '100%',
    paddingBottom: 40,
    paddingHorizontal: 20,
    backgroundColor: 'whitesmoke',
  },
  headerContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  divider: {
    marginHorizontal: 5,
    marginVertical: 20,
    borderColor: '#b6dde9',
    borderWidth: 2,
  },
  textContainer: {
    padding: 10,
    marginVertical: 10,
    justifyContent: 'space-around',
  },
  hyperlink: {
    color: "#0d6efd",
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  icon: {
    color: 'whitesmoke',
    fontSize: Platform.OS === 'web' ? 36 : 46,
    marginHorizontal: 10,
  },
  scrollView: {
    flexGrow: 1,
    paddingTop: Platform.OS === 'web' ? 20 : 0,
  }
});