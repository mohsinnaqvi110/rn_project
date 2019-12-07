
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Home.styles';
import { NavigateConsumer } from '../../context/NavigationContext'

class Header extends Component {
    render() {
        return (
            <View style={styles.searchContainer}>

                <Text style={[styles.title, (Platform.OS === 'ios') ? styles.margin : null]}>
                    iProperty.com.my
                </Text>

                <View style={styles.tabsArea}>
                    <View style={styles.tabs}>
                        <Text style={styles.text}>Buy</Text>
                    </View>
                    <View style={styles.tabs}>
                        <Text style={styles.text}>Rent</Text>
                    </View>
                </View>

                <NavigateConsumer>
                    {props => {
                        return <TouchableOpacity
                            onPress={() => props.navigate('Search')}
                            style={styles.searchArea}>
                            <View style={styles.search}>
                                <Icon style={styles.searchIcon} name="search" size={25} color="#666" />
                                <Text style={styles.searchText}>Search for property</Text>
                            </View>
                        </TouchableOpacity >
                    }}
                </NavigateConsumer>

            </View >
        );
    }
}

export default Header;