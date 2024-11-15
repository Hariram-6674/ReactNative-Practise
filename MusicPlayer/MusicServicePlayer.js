import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';
import {playListData} from './src/constants';

export async function setupPlayer() {
  let isSet = false;
  try {
    await TrackPlayer.getActiveTrack();
  } catch (error) {
    await TrackPlayer.setupPlayer();
  } finally {
    return isSet;
  }
}

export async function addtrack() {
  await TrackPlayer.add(playListData);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export async function playbackService() {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });
  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });
  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });
}
