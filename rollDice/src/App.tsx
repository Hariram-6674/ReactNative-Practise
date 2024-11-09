import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import React, {useState} from 'react';
import {PropsWithChildren} from 'react';
import DiceOne from '../assests/One.png';
import DiceTwo from '../assests/Two.png';
import DiceThree from '../assests/Three.png';
import DiceFour from '../assests/Four.png';
import DiceFive from '../assests/Five.png';
import DiceSix from '../assests/Six.png';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type DiceProps = PropsWithChildren<{
  //this is part of typescript instead of writing funtions to handle this we have written a type which is more error free
  imageUrl: ImageSourcePropType; // this makes sure that the url is image and not just any url like js
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

export default function App(): JSX.Element {
  const [diceimage, setdiceimage] = useState<ImageSourcePropType>(DiceOne);
  const rollDiceTap = () => {
    let rannum = Math.round(Math.random() * 6) + 1;
    switch (rannum) {
      case 1:
        setdiceimage(DiceOne);
        break;
      case 2:
        setdiceimage(DiceTwo);
        break;
      case 3:
        setdiceimage(DiceThree);
        break;
      case 4:
        setdiceimage(DiceFour);
        break;
      case 5:
        setdiceimage(DiceFive);
        break;
      case 6:
        setdiceimage(DiceSix);
        break;

      default:
        setdiceimage(DiceOne);
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceimage} />
      <Pressable style={styles.diceContainer} onPress={rollDiceTap}>
        <Text style={styles.rollDiceBtnText}>Roll</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
