import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors'

export default StyleSheet.create({
  backContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: Colors.primary,
    flexDirection: 'column',
  },
  backArea: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  back: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backText: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
  },
  margin: {
    marginLeft: 10,
  },
  text: {
    fontSize: 24,
    color: 'black',
    marginLeft: 10,
  },
});