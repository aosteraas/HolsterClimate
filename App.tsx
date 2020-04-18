import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Header } from './src/components/Header';
import { Forecast } from './src/components/Forecast';
import { CurrentConditions } from './src/components/CurrentConditions';
import { Chart } from './src/components/Chart';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: '#6699CC' }} />
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <Forecast />
        <CurrentConditions />
        <Chart />
      </ScrollView>
      <SafeAreaView style={{ backgroundColor: '#6699CC' }} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#dfdfdf',
  },
});
