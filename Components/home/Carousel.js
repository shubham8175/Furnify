import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {COLORS} from '../../constants';

const Carousel = () => {
  const slides = [
    'https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?size=626&ext=jpg&ga=GA1.1.272792041.1700462114&semt=sph',
    'https://img.freepik.com/free-photo/armchair-green-living-room-with-copy-space_43614-910.jpg?size=626&ext=jpg&ga=GA1.1.272792041.1700462114&semt=sph',
    'https://img.freepik.com/free-photo/brown-sofa-blue-room_1194-6647.jpg?size=626&ext=jpg&ga=GA1.1.272792041.1700462114&semt=sph',
    'https://img.freepik.com/free-photo/brown-sofa-blue-room_1194-6647.jpg?size=626&ext=jpg&ga=GA1.1.272792041.1700462114&semt=sph',
  ];
  return (
    <View style={StyleSheet.container}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        ImageComponentStyle={{borderRadius: 15, width: '93%', marginTop: 15}}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
 container:{
    flex:1,
    alignItems:'center'
 }
});
