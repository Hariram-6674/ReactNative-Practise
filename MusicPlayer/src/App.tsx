import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {setupPlayer, addtrack} from '../MusicServicePlayer';
import MusicPlayer from './screens/MusicPlayer';

function App(): JSX.Element {
  const [isplayer, setisplayer] = useState(false);

  async function setup() {
    let set = await setupPlayer();
    if (set) {
      await addtrack();
    }
    setisplayer(set);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isplayer) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;