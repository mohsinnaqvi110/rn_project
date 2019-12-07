import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, Image, Text } from 'react-native';
import styles from './Home.styles';
import { newsData, lifeData } from '../../constants/staticData';

function Item({ item }) {
    return (
        <View>
            <Image
                style={styles.listImage}
                source={{ uri: item.url }} />

            <Text style={styles.titleText}>{item.title}</Text>
        </View>
    );
}

class List extends Component {

    render() {
        const { type } = this.props;

        return (
            <SafeAreaView>
                <FlatList
                    data={(type === 1) ? newsData : lifeData}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    }
}

export default List;

