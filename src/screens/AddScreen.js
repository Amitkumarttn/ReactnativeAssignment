import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Tick} from '../constant';

const {height, width} = Dimensions.get('window');

@inject('listStore')
@observer
export default class UpdateScreen extends Component {
  state = {
    id: this.props.route.params.id,
    title: this.props.route.params.title,
    body: this.props.route.params.body,
  };
  componentDidMount() {
    console.log(this.props);
  }
  handlePress = () => {
    if(this.props.route.params.title === ''){
      alert('')
      this.props.listStore.addListItem( this.state.title, this.state.body, this.state.id,);
    }
    else{
      this.props.listStore.updateList(this.state.title, this.state.body, this.state.id,);
    }
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.handlePress()}
          style={styles.tick}>
          <Image style={styles.icon} source={Tick} />
        </TouchableOpacity>

        <View style={styles.TextInput}>
          <TextInput
            placeholder="Add Title Here"
            value={this.state.title}
            onChangeText={text => this.setState({title: text})}
          />
        </View>
        <View style={styles.TextInput2}>
          <TextInput
            placeholder="Add Note Here"
            value={this.state.body}
            onChangeText={text => this.setState({body: text})}
            multiline
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    width: width - 50,
    borderColor: '#7B55EF',
    borderWidth: 2,
    height: 45,
    marginTop: 20,
    justifyContent: 'center',
    paddingLeft: 20,
    borderRadius: 4,
    fontSize: 22,
  },
  TextInput2: {
    width: width - 50,
    borderColor: '#7B55EF',
    borderWidth: 2,
    height: 200,
    marginVertical: 20,
    justifyContent: 'center',
    paddingLeft: 20,
    borderRadius: 4,
    fontSize: 22,
  },
  tick: {
    backgroundColor: '#5FDAC4',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.4,
    elevation: 1,
    position: 'absolute',
    zIndex: 1,
    bottom: Platform.OS === 'ios' ? -400 : -280,
    alignSelf: 'flex-end',
    right: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
