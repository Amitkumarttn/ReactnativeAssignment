import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';

import playlistData from '../data/playlist.json';
import localTrack from '../audio/audio.m4a';

import {PlayIcon, PauseIcon, NextIcon} from '../constants';

const setupIfNecessary = async () => {
  // if app was relaunched and music was already playing, we don't setup again.
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    return;
  }

  await TrackPlayer.setupPlayer({});
  await TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],
    compactCapabilities: [Capability.Play, Capability.Pause],
  });

  await TrackPlayer.add(playlistData);
  await TrackPlayer.add({
    url: localTrack,
    title: 'Pure (Demo)',
    artist: 'David Chavez',
    artwork: 'https://i.scdn.co/image/e5c7b168be89098eb686e02152aaee9d3a24e5b6',
    duration: 28,
  });

  TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

const togglePlayback = async playbackState => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack == null) {
    // TODO: Perhaps present an error or restart the playlist?
  } else {
    if (playbackState !== State.Playing) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};

const AudioPlayer = () => {
  const playbackState = usePlaybackState();
  const progress = useProgress();

  const [trackArtwork, setTrackArtwork] = useState('');
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtist, setTrackArtist] = useState('');

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (
      event.type === Event.PlaybackTrackChanged &&
      event.nextTrack !== undefined
    ) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artist, artwork} = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  useEffect(() => {
    setupIfNecessary();
  }, []);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.contentContainer}>
        <Image style={styles.artwork} source={{uri: `${trackArtwork}`}} />
        <Text style={styles.titleText}>{trackTitle}</Text>
        <Text style={styles.artistText}>{trackArtist}</Text>
        <Slider
          style={styles.progressContainer}
          value={progress.position}
          minimumValue={0}
          maximumValue={progress.duration}
          thumbTintColor="#FFD479"
          minimumTrackTintColor="#FFD479"
          maximumTrackTintColor="#FFFFFF"
          onSlidingComplete={async value => {
            await TrackPlayer.seekTo(value);
          }}
        />
        <View style={styles.progressLabelContainer}>
          <Text style={styles.progressLabelText}>
            {new Date(progress.position * 1000).toISOString().substr(14, 5)}
          </Text>
          <Text style={styles.progressLabelText}>
            {new Date((progress.duration - progress.position) * 1000)
              .toISOString()
              .substr(14, 5)}
          </Text>
        </View>
      </View>
      <View style={styles.actionRowContainer}>
        <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
          <Image style={styles.pre} source={NextIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.playButtonContainer}
          onPress={() => togglePlayback(playbackState)}>
          {playbackState === State.Playing ? (
            <Image style={styles.playPause} source={PauseIcon} />
          ) : (
            <Image style={styles.playPause} source={PlayIcon} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
          <Image style={styles.next} source={NextIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  playButtonContainer: {
    backgroundColor: '#fff',
    borderColor: 'rgba(93, 63, 106, 0.2)',
    borderWidth: 16,
    width: 128,
    height: 128,
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 32,
    shadowColor: '#5D3F6A',
    shadowRadius: 30,
    shadowOpacity: 0.5,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  topBarContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  queueButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#888',
  },
  artwork: {
    width: 240,
    height: 240,
    marginTop: 30,
    backgroundColor: 'grey',
    borderRadius: 20,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginTop: 30,
  },
  artistText: {
    fontSize: 16,
    fontWeight: '200',
    color: '#000',
  },
  progressContainer: {
    height: 40,
    width: 380,
    marginTop: 25,
    flexDirection: 'row',
  },
  progressLabelContainer: {
    width: 370,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: '#000',
    fontVariant: ['tabular-nums'],
  },
  actionRowContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 100,
    justifyContent: 'space-between',
  },
  primaryActionButton: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFD479',
  },
  secondaryActionButton: {
    fontSize: 14,
    color: '#FFD479',
  },
  playPause: {
    tintColor: '#000',
    width: 50,
    height: 50,
  },
  next: {
    tintColor: '#888',
  },
  pre: {
    transform: [{rotate: '180deg'}],
    tintColor: '#888',
  },
});

export default AudioPlayer;
