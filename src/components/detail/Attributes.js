
import React, { Component } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import styles from './Detail.styles';

class Attributes extends Component {

    render() {
        const { attributes } = this.props;

        return (
            <View style={styles.childContainer}>
                <View style={styles.textArea}>
                    <Text style={styles.text}>Bathroom: {attributes.bathroom}</Text>
                    <Text style={styles.text}>Bedroom: {attributes.bedroom}</Text>
                    <Text style={styles.text}>CarPark: {attributes.carPark}</Text>
                    <Text style={styles.text}>BuiltUp: {attributes.builtUp}</Text>
                    <Text style={styles.text}>LandTitleType: {attributes.landTitleType}</Text>
                    <Text style={styles.text}>Tenure: {attributes.tenure}</Text>
                    <Text style={styles.text}>UnitType: {attributes.unitType}</Text>
                    <Text style={styles.text}>SizeUnit: {attributes.sizeUnit}</Text>
                </View>
            </View>
        );
    }
}

export default Attributes;