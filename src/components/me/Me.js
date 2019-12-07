
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Me.styles';

class Me extends Component {
  render() {
    return (
     <View style={styles.container}>
       <Text style={styles.welcome}>
         Me
       </Text>
     </View>
    );
  }
}

export default Me;