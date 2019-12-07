import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../home/Home';
import Saved from '../saved/Saved';
import Notifications from '../notifications/Notifications';
import Me from '../me/Me';
import styles from './Dashboard.styles';
import { NavigateProvider } from '../../context/NavigationContext'

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }

  render() {
    const {selectedTab} = this.state;
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={selectedTab === 'home'}
          title="Home"
          selectedTitleStyle={styles.selected}
          renderIcon={() => <Icon name="home" size={25} color="#666" />}
          renderSelectedIcon={() => <Icon name="home" size={25} color="#3496f0" />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <NavigateProvider value={this.props.navigation}>
            <Home />
          </NavigateProvider>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={selectedTab === 'saved'}
          title="Saved"
          selectedTitleStyle={styles.selected}
          renderIcon={() => <Icon name="star" size={25} color="#666" />}
          renderSelectedIcon={() => <Icon name="star" size={25} color="#3496f0" />}
          onPress={() => this.setState({ selectedTab: 'saved' })}>
          <Saved />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={selectedTab === 'bell'}
          title="Notification"
          selectedTitleStyle={styles.selected}
          renderIcon={() => <Icon name="bell" size={25} color="#666" />}
          renderSelectedIcon={() => <Icon name="bell" size={25} color="#3496f0" />}
          onPress={() => this.setState({ selectedTab: 'bell' })}>
          <Notifications />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={selectedTab === 'user'}
          title="Me"
          selectedTitleStyle={styles.selected}
          renderIcon={() => <Icon name="user" size={25} color="#666" />}
          renderSelectedIcon={() => <Icon name="user" size={25} color="#3496f0" />}
          onPress={() => this.setState({ selectedTab: 'user' })}>
          <Me />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

export default Dashboard;