import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import {useProgress} from 'react-native-track-player';

const songslider = () => {
  const {position, duration} = useProgress();
  return (
    <View>
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        maximumTrackTintColor='"#FFF'
        thumbTintColor="#FFF"
        style={styles.container}
      />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>
          {new Date(position * 1000).toISOString().substring(15, 19)}
        </Text>
        <Text style={styles.time}>
          {new Date((duration - position) * 1000)
            .toISOString()
            .substring(15, 19)}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  sliderContainer: {
    width: 350,
    height: 40,
    marginTop: 25,

    flexDirection: 'row',
  },
  timeContainer: {
    width: 340,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    color: '#fff',
  },
});
export default songslider;