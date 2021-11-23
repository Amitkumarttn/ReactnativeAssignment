import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';

import {ListIcon, GridIcon} from '../constant';
import {ListViewScreen, GridViewScreen} from '../screen';

const {width, height} = Dimensions.get('window');

class ListScreen extends Component {
  state = {
    showList: false,
    showGrid: true,
  };

  _handleListPress = () => {
    this.setState({showList: true, showGrid: false});
  };
  _handleGridPress = () => {
    this.setState({showGrid: true, showList: false});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <TouchableOpacity onPress={this._handleListPress}>
            <Image
              source={ListIcon}
              style={[
                styles.icons,
                {tintColor: this.state.showList ? '#000' : '#888'},
              ]}
            />
          </TouchableOpacity>
          <View style={{marginHorizontal: 70}} />
          <TouchableOpacity onPress={this._handleGridPress}>
            <Image
              source={GridIcon}
              style={[
                styles.icons,
                {tintColor: this.state.showGrid ? '#000' : '#888'},
              ]}
            />
          </TouchableOpacity>
        </View>
        {this.state.showList ? (
          <ListViewScreen navigation={this.props.navigation} />
        ) : null}
        {this.state.showGrid ? (
          <GridViewScreen navigation={this.props.navigation} />
        ) : null}
      </View>
    );
  }
}

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F7F8F9',
    paddingHorizontal: 50,
    width: width,
  },
  txt: {
    fontSize: 25,
  },
  icons: {
    width: 40,
    height: 40,
    marginHorizontal: 25,
  },
});
