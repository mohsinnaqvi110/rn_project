import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  searchContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: Colors.primary,
    flexDirection: 'column',
  },
  searchArea: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 0.5,
    borderColor: Colors.border,
  },
  search: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchText: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
  },
  searchIcon: {
    marginLeft: 10,
  },
  margin: {
    marginTop: 50,
  }, tabsArea: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  tabs: {
    alignSelf: 'stretch',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 12,
    color: 'black',
    marginLeft: 10,
    marginTop: 5,
    marginRight: 10
  },
  text: {
    alignSelf: "center",
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
  },
  textBlue: {
    alignSelf: "center",
    fontSize: 16,
    color: Colors.primary,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    alignSelf: 'stretch',
    height: 200,
    marginLeft: 10,
    marginRight: 10
  },
  listImage: {
    resizeMode: 'cover',
    width: 200,
    height: 120,
    marginLeft: 10,
  },
});