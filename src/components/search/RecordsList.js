import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import styles from './Search.styles';
import { NavigateConsumer } from '../../context/NavigationContext'

function Item({ item }) {
    return (
        <NavigateConsumer>
            {props => {
                return <TouchableOpacity onPress={() => props.navigate('Detail', {
                    item,
                })} >
                    <View style={styles.childContainer}>
                        <Slideshow
                            height={250}
                            arrowRight={<View />}
                            arrowLeft={<View />}
                            dataSource={item.medias.slice(0, 5)}
                        />
                        <View style={styles.textArea}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.type}>{item.propertyType}</Text>
                            <Text style={styles.price}>{item.prices[0].max + " " + item.prices[0].currency}</Text>
                        </View>
                    </View>
                </TouchableOpacity >
            }}
        </NavigateConsumer>
    );
}

class RecordList extends Component {

    render() {
        const { data } = this.props;

        return (
            <FlatList
                data={data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
            />
        );
    }
}

export default RecordList;

