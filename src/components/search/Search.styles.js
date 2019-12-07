import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  childContainer: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginBottom:5,
    marginTop: 5,
  },
  listImage: {
    resizeMode: 'cover',
    height: 300,
  },
  textArea: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  type: {
    marginTop: 5,
    fontSize: 12,
  },
  price: {
    marginTop: 5,
    marginBottom:5,
    fontSize: 12,
    fontWeight: 'bold',
  },
});