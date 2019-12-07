
import React, { Component } from 'react';
import { View, SafeAreaView, Text, Image, ScrollView } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import Attributes from './Attributes';
import NavHeader from '../header/NavHeader';
import styles from './Detail.styles';

class Detail extends Component {

  render() {
    const { item } = this.props.navigation.state.params;
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <NavHeader title="Property Detail" back="Search" navigation={navigation} />
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

            <Attributes attributes={item.attributes} />

            <Image style={styles.image} source={require('../../../images/map.jpg')} />


            <View style={styles.buttonsArea}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Enquiry</Text>
              </View>
              <View style={styles.buttonWhatsapp}>
                <Text style={styles. buttonText}>WhatsApp</Text>
              </View>
            </View>
          </View>
        </ScrollView>

      </SafeAreaView>
    );
  }
}

export default Detail;