import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Image,
} from 'react-native';

const DATA = [
  {
    title: 'Formal wear for men',
    data: ['WES Formals', 'Arrow', 'Raymond'],
  },
  {
    title: 'Casual wear for men',
    data: ['Puma', 'Spyker', 'Pepe Jeans'],
  },
  {
    title: 'Gym wear',
    data: ['Reebok', 'Puma', 'Asics'],
  },
  {
    title: 'Ethnic wear for mens',
    data: ['Hangup', 'Fabindia'],
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <View style={styles.newContainer}>
      <Text style={styles.txt}>NEW</Text>
    </View>
    <View style={styles.inner}>
      <Text style={styles.title}>{title}</Text>
      <Image
        style={styles.avatar}
        source={require('../assets/images/img1.jpeg')}
      />
    </View>
    <Text>Grap now limited offer!!</Text>
  </View>
);

const SectionListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default SectionListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#c36f74',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
  },
  newContainer: {
    backgroundColor: 'green',
    width: 50,
    padding: 5,
    alignItems: 'center',
    top: -10,
    left: -10,
  },
  txt: {color: '#fff'},
  inner: {justifyContent: 'space-between', flexDirection: 'row'},
  avatar: {width: 60, height: 60, borderRadius: 30},
});
