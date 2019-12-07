
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Home.styles';

class StaticCard extends Component {

    render() {
        const { data } = this.props;

        return (
            <View>
                <View style={styles.tabsArea}>
                    <Text style={styles.text}>{data.title}</Text>
                    <Text style={styles.textBlue}>More</Text>
                </View>

                <Image
                    style={styles.image}
                    source={{ uri: data.url }} />

                <Text style={styles.titleText}>{data.des}</Text>
            </View>
        );
    }
}

export default StaticCard;