import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ForecastData } from '../models';

const data: ForecastData[] = [
  { name: 'Today', low: 5, high: 19 },
  { name: 'Tomorrow', low: 5, high: 19 },
  { name: 'Wednesday', low: 5, high: 19 },
  { name: 'Thursday', low: 5, high: 19 },
  { name: 'Friday', low: 5, high: 19 },
  { name: 'Saturday', low: 5, high: 19 },
  { name: 'Sunday', low: 5, high: 19 },
];

export const Forecast = () => {
  return (
    <View style={styles.container}>
      {data.map((d, i) => (
        <View key={i} style={styles.forecastRow}>
          <Text style={styles.name}>{d.name}</Text>
          <Text style={styles.low}>{d.low}</Text>
          <Text style={styles.high}>{d.high}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
    backgroundColor: '#ffffff',
    marginBottom: 12,
  },
  forecastRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomColor: '#dfdfdf',
    borderBottomWidth: 2,
  },
  name: {
    flex: 1,
    fontSize: 16,
  },
  low: {
    fontSize: 16,
    color: '#dfdfdf',
  },
  high: {
    fontSize: 16,
  },
});
