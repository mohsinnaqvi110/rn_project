
import React, { Component } from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import styles from './Home.styles';
import Colors from '../../constants/colors'
import Header from './HomeHeader';
import StaticCard from './StaticCard';
import List from './List';
import { newsObject, lifeObject } from '../../constants/staticData';

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>

        <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />

        <Header />

        <ScrollView>

          <StaticCard data={newsObject} />

          <List type={1} />

          <StaticCard data={lifeObject} />

          <List type={2} />

        </ScrollView>

      </View>
    );
  }
}

export default Home;