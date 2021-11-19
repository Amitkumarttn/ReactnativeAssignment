import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Realm from 'realm';
import Task from '../models/Task';
const Item = ({empId, name, designation, salary}) => (
  <View style={styles.item}>
    <Text style={styles.value}>ID: {empId}</Text>
    <Text style={styles.value}>Name: {name}</Text>
    <Text style={styles.value}>Designation: {designation}</Text>
    <Text style={styles.value}>Salary: {salary}</Text>
  </View>
);
function SortDataScreen({navigation}) {
  const [tasks, setTasks] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const realmRef = useRef(null);

  const subscriptionRef = useRef(null);

  const [sortarray, setSortarray] = useState([]);

  // var sortData = () => {

  // };
  const openRealm = useCallback(async () => {
    try {
      const config = {
        schema: [Task.schema],
      };

      const realm = await Realm.open(config);
      realmRef.current = realm;
      const tasksResults = realm.objects('Task');
      if (tasksResults?.length) {
        setTasks(tasksResults);
      }

      subscriptionRef.current = tasksResults;
      tasksResults.addListener((/*collection, changes*/) => {
        setTasks(realm.objects('Task'));
      });

      let mydata = realm.objects('Task');
      let sortData = mydata.sorted('salary', true);
      setSortarray(sortData);
      console.log('SSSSSSSS', sortData);
    } catch (err) {
      console.error('Error opening realm: ', err.message);
    }
  }, [realmRef, setTasks, setSortarray]);

  const closeRealm = useCallback(() => {
    const subscription = subscriptionRef.current;
    subscription?.removeAllListeners();
    subscriptionRef.current = null;

    const realm = realmRef.current;

    realm?.close();
    realmRef.current = null;
    setTasks([]);
    setSortarray([]);
  }, [realmRef]);

  useEffect(() => {
    openRealm();

    return closeRealm;
  }, [openRealm, closeRealm]);

  const renderItem = ({item}) => (
    <Item
      empId={item.empId}
      name={item.name}
      designation={item.designation}
      salary={item.salary}
    />
  );
  console.log('===>', JSON.stringify(sortarray));
  return (
    <View style={styles.container}>
      {sortarray.length === 0 ? (
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Nothing here, First add new Data</Text>
        </View>
      ) : (
        <SafeAreaView style={styles.container2}>
          <FlatList
            data={sortarray}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
        </SafeAreaView>
      )}
    </View>
  );
}
export default SortDataScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#6E60F9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  value: {
    fontSize: 16,
  },
});
