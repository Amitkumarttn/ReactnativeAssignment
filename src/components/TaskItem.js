import React, {memo} from 'react';
import {
  View,
  Text,
  Pressable,
  Platform,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import colors from '../styles/colors';
import {filterIcon} from '../constant';

function TaskItem({
  empId,
  name,
  designation,
  salary,
  isComplete,
  onToggleStatus,
  onDelete,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.task}>
        <View style={styles.descriptionContainer}>
          <Text numberOfLines={1} style={styles.description}>
            ID: {empId}
          </Text>
          <Text numberOfLines={1} style={styles.description}>
            Name: {name}
          </Text>
          <Text numberOfLines={1} style={styles.description}>
            Designation: {designation}
          </Text>
          <Text numberOfLines={1} style={styles.description}>
            Salary: {salary}
          </Text>
        </View>
        <Pressable onPress={onDelete} style={styles.deleteButton}>
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  task: {
    height: 150,
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginVertical: 8,
    backgroundColor: '#D6EAF8',
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.7,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    paddingHorizontal: 10,
    color: colors.black,
    fontSize: 17,
  },
  deleteButton: {
    justifyContent: 'center',
  },
  deleteText: {
    marginHorizontal: 10,
    color: 'red',
    fontSize: 17,
  },
});

// We want to make sure only tasks that change are rerendered
const shouldNotRerender = (prevProps, nextProps) =>
  prevProps.empId === nextProps.empId &&
  prevProps.name === nextProps.name &&
  prevProps.designation === nextProps.designation &&
  prevProps.salary === nextProps.salary &&
  prevProps.isComplete === nextProps.isComplete;

export default memo(TaskItem, shouldNotRerender);
