import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Platform,
} from 'react-native';
import Realm from 'realm';

import Task from '../models/Task';
import IntroText from '../components/IntroText';
import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';
import colors from '../styles/colors';
import {filterIcon} from '../constant';

function ListingScreen({navigation}) {
  const sortHandler = () => {
    navigation.navigate('Sort');
  };
  const [tasks, setTasks] = useState([]);

  const realmRef = useRef(null);

  const subscriptionRef = useRef(null);

  const openRealm = useCallback(async () => {
    try {
      const config = {
        schema: [Task.schema],
      };

      const realm = await Realm.open(config);
      realmRef.current = realm;

      // const openTasks = tasksResults.filtered();
      // console.log(
      //   `The lists of open tasks are: ${openTasks.map(
      //     openTask => openTask.name,
      //   )}`,
      // );

      const tasksResults = realm.objects('Task');
      if (tasksResults?.length) {
        setTasks(tasksResults);
      }

      subscriptionRef.current = tasksResults;
      tasksResults.addListener((/*collection, changes*/) => {
        setTasks(realm.objects('Task'));
      });
    } catch (err) {
      console.error('Error opening realm: ', err.message);
    }
  }, [realmRef, setTasks]);

  const closeRealm = useCallback(() => {
    const subscription = subscriptionRef.current;
    subscription?.removeAllListeners();
    subscriptionRef.current = null;

    const realm = realmRef.current;

    realm?.close();
    realmRef.current = null;
    setTasks([]);
  }, [realmRef]);

  useEffect(() => {
    openRealm();

    return closeRealm;
  }, [openRealm, closeRealm]);

  // const handleToggleTaskStatus = useCallback(
  //   task => {
  //     const realm = realmRef.current;
  //     realm?.write(() => {
  //       task.isComplete = !task.isComplete;
  //     });
  //   },
  //   [realmRef],
  // );

  const handleDeleteTask = useCallback(
    task => {
      const realm = realmRef.current;
      realm?.write(() => {
        realm?.delete(task);
      });
    },
    [realmRef],
  );

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.actionContainer}>
        <TextInput style={styles.textInput} placeholder="Search by name" />
        <TouchableOpacity style={styles.searchButton}>
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => sortHandler()}>
          <Image style={styles.icon} source={filterIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {tasks.length === 0 ? (
          <IntroText />
        ) : (
          <TaskList
            tasks={tasks}
            // onToggleTaskStatus={handleToggleTaskStatus}
            onDeleteTask={handleDeleteTask}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    // alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#888',
  },
  actionContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    width: 350,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 15,
  },
  textInput: {
    flex: 1,
    height: 50,
    width: '70%',
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 0,
    borderRadius: 5,
    backgroundColor: colors.white,
    fontSize: 17,
    // marginBottom: 20,
    borderWidth: 2,
    borderColor: '#888',
  },
  searchButton: {
    backgroundColor: '#D6EAF8',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 10,
  },
});

export default ListingScreen;
