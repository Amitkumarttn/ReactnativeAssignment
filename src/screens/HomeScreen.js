import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import Cards from './Cards';
import {Img1, Img2, Img3, Img4, Img5, Img6} from '../constants/Images';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Cards img={Img6} title="amit" desc="amitianka" price="23.45" />
          <Cards img={Img5} title="amit" desc="amitianka" price="23.45" />
          <Cards img={Img4} title="amit" desc="amitianka" price="23.45" />
          <Cards img={Img3} title="amit" desc="amitianka" price="23.45" />
          <Cards img={Img2} title="amit" desc="amitianka" price="23.45" />
          <Cards img={Img1} title="amit" desc="amitianka" price="23.45" />
          <Cards img={Img6} title="amit" desc="amitianka" price="23.45" />
          <Cards img={Img5} title="amit" desc="amitianka" price="23.45" />
          <Cards img={Img4} title="amit" desc="amitianka" price="23.45" />
          <Cards img={Img3} title="amit" desc="amitianka" price="23.45" />
          <Cards img={Img2} title="amit" desc="amitianka" price="23.45" />
          <Cards img={Img1} title="amit" desc="amitianka" price="23.45" />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});
