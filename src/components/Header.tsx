import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>Pascoe Vale South</Text>
      <Text style={styles.desc}>Showers. Windy</Text>
      <View style={styles.imgTemp}>
        <View style={{ flex: 1 }}>
          <Text>TODO{'\n'} IMG</Text>
        </View>
        <View style={styles.temp}>
          <Text style={styles.current}>11.7º</Text>
          <Text style={styles.feelsLike}>Feels like 1.9</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#6699CC',
    paddingVertical: 22,
  },
  location: {
    color: '#ffffff',
    fontSize: 24,
  },
  desc: {
    color: '#ffffff',
    fontSize: 18,
  },
  imgTemp: {
    display: 'flex',
    flexDirection: 'row',
  },
  temp: {
    flexDirection: 'column',
    color: '#ffffff',
    flex: 1,
  },
  current: {
    color: '#ffffff',
    fontSize: 52,
  },
  feelsLike: {
    color: '#ffffff',

    //
  },
});
