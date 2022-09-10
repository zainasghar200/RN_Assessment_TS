import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_DATA} from '../src/redux/actionTypes';

const AddScreen = (props: any) => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onAdd = () => {
    let dataObj = {
      id: 556677,
      title: value,
    };
    let obj = {
      type: ADD_DATA,
      payload: dataObj,
    };
    dispatch(obj);
    // dispatch(obj);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={10}
        onChangeText={text => setValue(text)}
        value={value}
      />
      <Button title="Add" onPress={() => onAdd()}></Button>
    </View>
  );
};

AddScreen.options = {
  topBar: {
    title: {
      text: 'Adding Data',
    },
  },
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
  },
  button: {
    borderWidth: 1,
    padding: 10,
  },
  container: {
    padding: 16,
    marginTop: 24,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default AddScreen;
