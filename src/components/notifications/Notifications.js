
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Notifications.styles';

class Notifications extends Component {
  render() {
    return (
     <View style={styles.container}>
       <Text style={styles.welcome}>
         Notifications
       </Text>
     </View>
    );
  }
}

export default Notifications;