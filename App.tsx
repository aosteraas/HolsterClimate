import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Header } from './src/components/Header';
import { Forecast } from './src/components/Forecast';
import { CurrentConditions } from './src/components/CurrentConditions';

export default function App() {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: '#6699CC' }} />
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <Forecast />
        <CurrentConditions />
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
