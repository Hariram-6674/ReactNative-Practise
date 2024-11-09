import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const passScehma = Yup.object().shape({
  passwordLen: Yup.number()
    .min(4, 'SHud be len 4')
    .max(16, 'SHud be len 16')
    .required('required'),
});

export default function App() {
  const [password, setpassword] = useState('');
  const [ispassgen, setispassgen] = useState(false);
  const [numbers, setnumbers] = useState(false);
  const [symbols, setsymbols] = useState(false);
  const [lowercase, setlowercase] = useState(true);
  const [uppercase, setuppercase] = useState(false);

  const generatePass = (passLen: number) => {
    let charList = '';

    const upperCase = 'ABCDEFGHIJKLMNOPKRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const numebr = '0123456789';
    const symbol = '!@#$%^&*()_+';

    if (upperCase) {
      charList += upperCase;
    }
    if (lowerCase) {
      charList += lowerCase;
    }
    if (symbol) {
      charList += symbol;
    }
    if (numebr) {
      charList += numebr;
    }

    const passres = createPass(charList, passLen);
    setpassword(passres);
    setispassgen(true);
  };
  const createPass = (characters: string, passLen: number) => {
    let result = '';
    for (let i = 0; i < passLen; i++) {
      const charInd = Math.round(Math.random() * characters.length);
      result += characters.charAt(charInd);
    }
    return result;
  };
  const resetPass = () => {
    setpassword('');
    setlowercase(true);
    setnumbers(false);
    setuppercase(false);
    setsymbols(false);
    setispassgen(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{passwordLen: ''}}
            validationSchema={passScehma}
            onSubmit={values => {
              console.log(values);
              generatePass(+values.passwordLen); //+ convert it to number
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              isSubmitting,
              handleReset,
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Len</Text>
                    {touched.passwordLen &&
                      errors.passwordLen && ( // to show errors
                        <Text style={styles.errorText}>
                          {errors.passwordLen}
                        </Text>
                      )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLen}
                    onChangeText={handleChange('passwordLen')}
                    placeholder="Ex. 8"
                    keyboardType="numeric"
                  />
                </View>

                <View style={[styles.inputWrapper]}>
                  <Text style={styles.heading}>Lower case</Text>
                  <BouncyCheckbox
                    style={styles.inputColumn}
                    isChecked={lowercase}
                    onPress={() => setlowercase(!lowercase)}
                    fillColor="#FED85D"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Upper case</Text>
                  <BouncyCheckbox
                    style={styles.inputColumn}
                    isChecked={uppercase}
                    onPress={() => setuppercase(!uppercase)}
                    fillColor="#FED85D"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Number</Text>
                  <BouncyCheckbox
                    style={styles.inputColumn}
                    isChecked={numbers}
                    onPress={() => setnumbers(!numbers)}
                    fillColor="#FED85D"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>symbols</Text>
                  <BouncyCheckbox
                    style={styles.inputColumn}
                    isChecked={symbols}
                    onPress={() => setsymbols(!symbols)}
                    fillColor="#FED85D"
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    style={styles.primaryBtn}
                    onPress={handleSubmit}>
                    <Text style={styles.primaryBtnTxt}>generate pass</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPass();
                    }}>
                    <Text style={styles.secondaryBtnTxt}>reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {ispassgen ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result</Text>
            <Text style={styles.description}>Long press to copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
});
