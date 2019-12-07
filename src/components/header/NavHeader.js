
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './NavHeader.styles';

class NavHeader extends Component {
    render() {
        const {title, back} = this.props;
        return (
            <View style={styles.backContainer}>
                < TouchableOpacity
                    onPress={() => this.props.navigation.navigate(back)}
                    style={styles.backArea}>
                    <View style={styles.back}>
                        <Icon style={styles.margin} name="arrow-left" size={30} color="#000" />
                        <Text style={styles.text}>{title}</Text>
                    </View>
                </TouchableOpacity >
            </View >
        );
    }
}

export default NavHeader;