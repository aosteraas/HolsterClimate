import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../styles';

export const CurrentConditions = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <ConditionItem icon="I" color={colors.red} value="19.2º" label="Recorded at 1:00pm" odd />
        <ConditionItem icon="I" color={colors.blue} value="9.2º" label="Recorded at 4:59am" />
        <ConditionItem icon="I" color={colors.blue} value="0.6 mm" label="Rain since 9am" odd />
        <ConditionItem icon="I" color={colors.blue} value="0 – 2 mm" label="70% Chance" />
        <ConditionItem icon="I" color={colors.green} value="26 km/h" label="West" odd />
        <ConditionItem icon="I" color={colors.green} value="49 km/h" label="Gust" />
        <ConditionItem icon="I" color={colors.blue} value="77%" label="Humidity" odd />
        <ConditionItem icon="I" color={colors.blue} value="1014 hPa" label="Air Pressure" />
      </View>
      <View style={styles.loContainer}>
        <Text style={styles.lastObservation}>Last Observation 11 minutes ago</Text>
      </View>
    </View>
  );
};
interface Props {
  icon: string;
  color: string;
  value: string;
  label: string;
  odd?: boolean;
}
const { width } = Dimensions.get('window');
const borderRight = {
  borderRightWidth: 1,
  borderRightColor: '#cecece',
};
const ConditionItem = ({ icon, color, value, label, odd }: Props) => {
  const viewStyle = [styles.condItem, odd ? { ...borderRight } : null];
  const iconStyle = [styles.iconView, { backgroundColor: color }];
  return (
    <View style={viewStyle}>
      <View style={iconStyle}>
        <Text>{icon}</Text>
      </View>
      <View>
        <Text style={{ color }}>{value}</Text>
        <Text style={{ fontSize: 14, color: 'grey' }}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginBottom: 20,
    borderTopWidth: 2,
    borderTopColor: '#cecece',
    //
  },
  condItem: {
    width: width / 2,
    padding: 10,
    flexDirection: 'row',
    borderColor: '#cecece',
    borderBottomWidth: 1,
  },
  iconView: {
    color: `#ffffff`,
    width: 30,
    height: 30,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  loContainer: {
    borderColor: '#cecece',
    // borderTopWidth: 2,
    borderBottomWidth: 2,
    paddingVertical: 6,
  },
  lastObservation: {
    textAlign: 'center',
  },
});
