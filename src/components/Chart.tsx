import React from 'react';
import _data from '../data.json';
import { GraphPoint } from '../models';
import { View, Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const data = _data as GraphPoint[];
const dates = data.map((d) => d.date);
const temps = data.map((d) => d.temperature);
const feelsLikes = data.map((d) => d.feelsLike);

export const Chart = () => {
  return (
    <View>
      <LineChart
        data={{
          labels: dates,
          datasets: [{ data: temps }],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
      />
    </View>
  );
};
