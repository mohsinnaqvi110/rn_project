import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  margin: {
    marginLeft: 10,
  },
  childContainer: {
    paddingBottom: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
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
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 5,
    fontSize: 14,
  },
  type: {
    marginTop: 5,
    fontSize: 12,
  },
  price: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    height: 250
  },
  buttonsArea: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 10,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    width: 150,
    height:40,
    margin:5,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.primary
  },
  buttonWhatsapp: {
    alignSelf: 'stretch',
    alignItems: 'center',
    width: 150,
    height:40,
    margin:5,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "#065F54"
  },
  buttonText: {
    fontSize:16,
    color: 'white'
  },
});