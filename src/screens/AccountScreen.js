import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  LogBox,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';

// Importing Icons
import {
  AccountUserIcon,
  TrackIcon,
  SizeIcon,
  NotificationIcon,
  StoreLocatorIcon,
  RightIcon,
  FlagIcon,
  MailIcon,
  TermsIcon,
  PrivacyIcon,
  LikeIcon,
  StarIcon,
  ChatIcon,
  ShippingIcon,
  QuestionIcon,
  AccountIcon,
  LanguageIcon,
  CountryIcon,
} from '../constants/Icons';

//importing Screen
import {PopupModelScreen} from '../screens';

const {width, height} = Dimensions.get('window');

//Data
const DATAONE = [
  {
    icons: TrackIcon,
    title: 'Track Order',
  },
  {
    icons: SizeIcon,
    title: 'Size Chart',
  },
  {
    icons: NotificationIcon,
    title: 'Notification',
  },
  {
    icons: StoreLocatorIcon,
    title: 'Store Locator',
  },
];

const DATATWO = [
  {
    icons: CountryIcon,
    text: 'Country',
    flag: FlagIcon,
    txt: 'USD',
  },
  {
    icons: LanguageIcon,
    text: 'Language',
    txt: 'ENG',
  },
  {
    icons: AccountIcon,
    text: 'About Us',
  },
  {
    icons: QuestionIcon,
    text: 'FAQ',
  },
  {
    icons: ShippingIcon,
    text: 'Shipping & Returns',
  },
  {
    icons: ChatIcon,
    text: 'Chat With Us',
  },
  {
    icons: StarIcon,
    text: 'Rate Application',
  },
  {
    icons: LikeIcon,
    text: 'Share Application',
  },
  {
    icons: PrivacyIcon,
    text: 'Privacy Policy',
  },
  {
    icons: TermsIcon,
    text: 'Terms & Conditions',
  },
  {
    icons: MailIcon,
    text: 'Send Us An Email',
  },
];

export default class AccountScreen extends React.Component {
  state = {
    modalVisible: false,
  };
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }
  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  render() {
    const Item = ({title, icons}) => (
      <View style={styles.ItemsContainer}>
        <Image style={styles.icons} source={icons} />
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.rightIcon} source={RightIcon} />
      </View>
    );

    const ItemTwo = ({title, icons, flag, txt}) => (
      <View style={styles.ItemsContainer}>
        <Image style={styles.icons} source={icons} />
        <Text>{title}</Text>
        <Image style={styles.us} source={flag} />
        <Text style={styles.txt}>{txt}</Text>
        <Image style={styles.rightIcon} source={RightIcon} />
      </View>
    );
    const renderItem = ({item}) => (
      <View>
        <Item title={item.title} icons={item.icons} />
      </View>
    );
    const renderItemTwo = ({item}) => (
      <View>
        <ItemTwo
          title={item.text}
          icons={item.icons}
          flag={item.flag}
          txt={item.txt}
        />
      </View>
    );
    const {modalVisible} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1, flexGrow: 1}}>
          <View style={styles.container}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                this.setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <TouchableOpacity
                    style={{zIndex: 10}}
                    onPress={() => this.setModalVisible(!modalVisible)}>
                    <Image
                      style={styles.closebtn}
                      source={require('../assets/Icons/close.png')}
                    />
                  </TouchableOpacity>
                  <PopupModelScreen />
                </View>
              </View>
            </Modal>

            <View style={styles.WelcomeContainer}>
              <Text style={styles.welcometxt}>Welcome!</Text>
              <View style={styles.loginContainer}>
                <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                  <Text style={styles.credential}>SIGN IN</Text>
                </TouchableOpacity>
                <View style={styles.line} />
                <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                  <Text style={styles.credential}>JOIN</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.AccountIconContainer}>
                <Image style={styles.UserIcon} source={AccountUserIcon} />
              </View>
            </View>

            <FlatList
              data={DATAONE}
              renderItem={renderItem}
              scrollEnabled={false}
              contentContainerStyle={{flexGrow: 1}}
              keyExtractor={(item, index) => index}
            />
            <FlatList
              data={DATATWO}
              renderItem={renderItemTwo}
              scrollEnabled={false}
              contentContainerStyle={{flexGrow: 1}}
              keyExtractor={(i, index) => index}
            />
            <View style={styles.appVersionContainer}>
              <Text style={styles.appTxt}>App Version 4.0.6(1)</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
  WelcomeContainer: {
    width: width,
    height: height / 6,
    backgroundColor: '#fff',
    padding: 30,
  },
  welcometxt: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
  },
  line: {
    backgroundColor: '#000',
    width: 1.2,
    height: 15,
    marginHorizontal: 7,
    alignSelf: 'center',
  },
  credential: {
    fontSize: 12,
    color: '#000',
  },
  loginContainer: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginVertical: 10,
    backgroundColor: '#FFFCEC',
    width: 95,
    padding: 5,
  },
  AccountIconContainer: {
    width: 60,
    marginHorizontal: 250,
    marginVertical: -50,
    top: -12,
    backgroundColor: '#FFFCEC',
    borderRadius: 50,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFF3BC',
  },
  UserIcon: {
    width: 40,
    height: 40,
  },
  ItemsContainer: {
    backgroundColor: '#fff',
    top: 10,
    padding: 20,
    borderColor: '#eee',
    borderBottomWidth: 2,
    flexDirection: 'row',
    width: width,
    alignSelf: 'center',
  },
  rightIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 360,
    marginTop: 18,
    position: 'absolute',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    width: width,
    height: height,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    marginRight: 80,
    fontSize: 22,
  },
  closebtn: {
    width: 30,
    height: 30,
    position: 'absolute',
    marginHorizontal: 130,
  },
  headingContainer: {
    flexDirection: 'row',
    marginVertical: 80,
    marginRight: -70,
  },
  icons: {width: 15, height: 15, marginRight: 20},
  appVersionContainer: {
    width: width,
    height: 62,
    backgroundColor: '#eee',
  },
  appTxt: {
    paddingTop: 25,
    textAlign: 'center',
    alignContent: 'center',
    color: '#888',
  },
  us: {
    width: 25,
    height: 20,
    marginHorizontal: 170,
  },
  txt: {
    position: 'absolute',
    marginHorizontal: 320,
    marginTop: 19,
  },
});
