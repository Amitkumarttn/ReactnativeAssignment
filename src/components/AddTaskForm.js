import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Dimensions,
  Platform,
  StyleSheet,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Alert,
} from 'react-native';
import {UserIcon, IdIcon, salaryIcon, designationIcon} from '../constant';
import colors from '../styles/colors';
const {width, height} = Dimensions.get('window');

function AddTaskForm({onSubmit, navigation}) {
  const [empId, setEmpId] = useState('');
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = () => {
    const alphabetOnly = /[^a-zA-Z]/;
    if (name.length == '' || designation.length == '' || salary.length == '') {
      Alert.alert('Information', 'Please fill all fields');
    } else if (empId.length == '') {
      Alert.alert('Information', 'Please fill all fields');
    } else if (isNaN(empId)) {
      Alert.alert('Invalid ID', 'contain only number');
    } else if (!alphabetOnly.test(name) === false) {
      Alert.alert('Invalid Name', 'contain only alphabets');
    } else if (!alphabetOnly.test(designation) === false) {
      Alert.alert('Invalid Designation', 'contain only alphabets');
    } else if (isNaN(salary)) {
      Alert.alert('Invalid Salary', 'contain only number');
    } else if (salary.length > 500001) {
      Alert.alert('Limit Exceed', 'range should not exceed 5,00,000');
    } else {
      onSubmit(empId, name, designation, salary);
      setEmpId('');
      setName('');
      setDesignation('');
      setSalary('');
    }
    // navigation.navigate('List');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      style={styles.container}>
      <View>
        <Image style={styles.icons} source={IdIcon} />
        <TextInput
          value={empId}
          placeholder="Enter ID"
          onChangeText={setEmpId}
          autoCorrect={false}
          keyboardType="numeric"
          autoCapitalize="none"
          style={styles.TextInputContainer}
        />
      </View>
      <View>
        <Image style={styles.icons} source={UserIcon} />
        <TextInput
          value={name}
          placeholder="Enter Employee name"
          onChangeText={setName}
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.TextInputContainer}
        />
      </View>
      <View>
        <Image style={styles.icons} source={salaryIcon} />
        <TextInput
          value={salary}
          placeholder="Enter Employee Salary"
          onChangeText={setSalary}
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.TextInputContainer}
        />
      </View>
      <View>
        <Image style={styles.icons} source={designationIcon} />
        <TextInput
          value={designation}
          placeholder="Enter Employee Designation"
          onChangeText={setDesignation}
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.TextInputContainer}
        />
      </View>
      <TouchableOpacity
        style={styles.ButtonContainer}
        onPress={() => handleSubmit(navigation)}>
        <Text style={styles.Btn}>Submit</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 15,
  },
  TextInputContainer: {
    width: width - 50,
    height: 50,
    backgroundColor: '#fff',
    paddingLeft: 60,
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 18,
  },
  Input: {
    paddingRight: 3,
  },
  ButtonContainer: {
    backgroundColor: 'blue',
    width: width - 220,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Btn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
  },
  icons: {
    width: 20,
    height: 20,
    marginHorizontal: 25,
    marginTop: 16,
    position: 'absolute',
    zIndex: 2,
    tintColor: '#888',
  },
});

export default AddTaskForm;
