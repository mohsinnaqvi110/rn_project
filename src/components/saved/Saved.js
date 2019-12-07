
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Saved.styles';

class Saved extends Component {
  render() {
    return (
     <View style={styles.container}>
       <Text style={styles.welcome}>
        Saved
       </Text>
     </View>
    );
  }
}

export default Saved;