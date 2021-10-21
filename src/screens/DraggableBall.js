import React, {Component, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
  View,
  Modal,
  Dimensions,
} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {ModalScreen} from '../screens';

const {width, height} = Dimensions.get('window');

const DraggableBall = () => {
  const globalAnimatedValue = useRef(new Animated.Value(0)).current;

  const globalAnimate = () => {
    const globalAnimation = Animated.timing(globalAnimatedValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    });
    globalAnimation.start();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Circle />
    </SafeAreaView>
  );
};

const circleRadius = 30;
class Circle extends Component {
  _touchX = new Animated.Value(width / 2 - circleRadius);
  _touchY = new Animated.Value(width / 2 - circleRadius);

  _onPanGestureEvent = Animated.event(
    [{nativeEvent: {x: this._touchX, y: this._touchY}}],
    {
      useNativeDriver: true,
    },
  );
  state = {
    modalVisible: false,
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  render() {
    const {modalVisible} = this.state;
    return (
      <PanGestureHandler onGestureEvent={this._onPanGestureEvent}>
        <Animated.View style={styles.BallContainer}>
          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                this.setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Notification Center</Text>
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => this.setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          <TouchableOpacity onPress={() => this.setModalVisible(true)}>
            <Animated.View
              style={[
                styles.ball,
                {
                  transform: [
                    {
                      translateX: Animated.add(
                        this._touchX,
                        new Animated.Value(-circleRadius),
                      ),
                    },
                    {
                      translateY: Animated.add(
                        this._touchY,
                        new Animated.Value(-circleRadius),
                      ),
                    },
                  ],
                },
              ]}
            />
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
    );
  }
}

export default DraggableBall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'grey',
  },
  BallContainer: {
    height: 150,
    justifyContent: 'center',
  },
  ball: {
    backgroundColor: '#fff',
    borderWidth: 10,
    borderColor: '#888',
    borderRadius: circleRadius,
    height: circleRadius * 2,
    width: circleRadius * 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 35,
    height: 250,
    width: 300,
    alignItems: 'center',
    shadowColor: '#888',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#888',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'white',
  },
});
