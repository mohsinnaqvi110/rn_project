
import React, { Component } from 'react';
import { View, SafeAreaView, ActivityIndicator } from 'react-native';
import styles from './Search.styles';
import NavHeader from '../header/NavHeader';
import { searchApi } from '../../constants/networkApi';
import Colors from '../../constants/colors'
import Records from './RecordsList';
import { NavigateProvider } from '../../context/NavigationContext'

const axios = require('axios');

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null
    };
  }

  async componentDidMount() {
    await axios.get(searchApi.fetchAllRecords)
      .then(response => {
        this.setState({ isLoading: false, data: response.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    const { data, isLoading } = this.state;
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        {(isLoading)
          ?
          <ActivityIndicator animating={isLoading} size="large" color={Colors.primary} />
          :
          <NavigateProvider value={this.props.navigation}>
            <NavHeader title="Bukit Jalil Location" back="Dashboard" navigation={navigation} />
            <Records data={data.items} />
          </NavigateProvider>
        }
      </SafeAreaView>
    );
  }
}

export default Search;