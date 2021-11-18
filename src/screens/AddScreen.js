import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import Realm from 'realm';

import AddTaskForm from '../components/AddTaskForm';
import Task from '../models/Task';
import IntroText from '../components/IntroText';
import TaskList from '../components/TaskList';
import colors from '../styles/colors';

function AddScreen({navigation}) {
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

      const tasksResults = realm.objects('Task');
      if (tasksResults?.length) {
        setTasks(tasksResults);
      }

      subscriptionRef.current = tasksResults;
      tasksResults.addListener(() => {
        setTasks(realm.objects('Task'));
      });
    } catch (err) {
      console.error('Error opening realm: ', err.message);
    }
  }, [realmRef, setTasks]);

  useEffect(() => {
    openRealm();
  }, [openRealm]);

  const handleAddTask = useCallback(
    (empId, name, designation, salary) => {
      if (!empId) {
        return;
      }
      const realm = realmRef.current;
      realm?.write(() => {
        realm?.create('Task', new Task({empId, name, designation, salary}));
      });
    },
    [realmRef],
  );

  const handleToggleTaskStatus = useCallback(
    task => {
      const realm = realmRef.current;
      realm?.write(() => {
        task.isComplete = !task.isComplete;
      });
    },
    [realmRef],
  );

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
    <View style={styles.container}>
      <AddTaskForm onSubmit={handleAddTask} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AddScreen;
