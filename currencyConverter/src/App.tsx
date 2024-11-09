import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {currencyByRupee} from './constants';
import CurrencyButton from './components/button';
import Snackbar from 'react-native-snackbar';

export default function App(): JSX.Element {
  const [inputval, setinputval] = useState('');
  const [resultval, setresultval] = useState('');
  const [targetCur, settargetCur] = useState('');

  const buttonPress = (targetval: Currency) => {
    if (!inputval) {
      return Snackbar.show({
        text: 'Enter a val',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
    const inptAmt = parseFloat(inputval);
    if (!isNaN(inptAmt)) {
      const convertVal = inputval * targetval.value;
      const result = `${targetval.symbol} ${convertVal.toFixed(2)}`;
      setresultval(result);
      settargetCur(targetval.name);
    } else {
      return Snackbar.show({
        text: 'Not a valid number',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
  };
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>💲</Text>
            <TextInput
              maxLength={14}
              value={inputval}
              clearButtonMode="always" //only for ios
              onChangeText={setinputval}
              keyboardType="number-pad"
              placeholder="Enter amount"
            />
          </View>
          {resultval && <Text style={styles.resultTxt}>{resultval}</Text>}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  targetCur === item.name && styles.selected,
                ]}
                onPress={() => buttonPress(item)}>
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 80,

    borderRadius: 12,
    backgroundColor: '#000',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});
