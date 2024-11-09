import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Image, FlatList} from 'react-native';
import {playListData} from '../constants';
import {useTrackPlayerEvents, Event, Track} from 'react-native-track-player';
import Songinfo from '../components/Songinfo';
import ControlCenter from '../components/ControlCenter';
import Songslider from '../components/Songslider';

const {width} = Dimensions.get('window');
const MusicPlayer = () => {
  const [track, setTrack] = useState<Track | null>();

  useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], event => {
    switch (event.type) {
      case Event.PlaybackActiveTrackChanged:
        // Directly use the track from the event object
        const playingTrack = event.track;
        setTrack(playingTrack ?? null); // Set track or null if undefined
        break;
    }
  });
  const renderArtWork = () => {
    return (
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {track?.artwork && (
            <Image
              style={styles.albumArtImg}
              source={{uri: track?.artwork?.toString()}}
            />
          )}
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
      />
      <Songinfo track={track} />
      <Songslider />
      <ControlCenter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    width: 300,
    height: 300,
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 4,
  },
});

export default MusicPlayer;
