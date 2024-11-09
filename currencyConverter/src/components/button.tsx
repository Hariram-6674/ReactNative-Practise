import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type CurrencyButtonProps = PropsWithChildren<{
  name: String;
  flag: string;
}>;

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flagg}>{props.flag}</Text>
      <Text style={styles.namee}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  flagg: {
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  namee: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 4,
  },
});

export default CurrencyButton;
