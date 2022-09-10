import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Dimensions,
} from 'react-native';

import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import {addData} from '../redux/actions';
import Toast from 'react-native-simple-toast';
import {Data} from '../types/types';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddScreen = (props: any) => {
  let dataReducer: any = useSelector(state => state);
  dataReducer = dataReducer['dataReducer'];
  let listData: Data[] = dataReducer['data'];

  const getID = (): number => {
    let IDs = listData.map(data => data.id);
    let max = Math.max(...IDs);
    return max + 1;
  };
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const onAdd = () => {
    let dataObj = {
      id: getID(),
      title: value,
    };

    addData(dataObj, dispatch);

    //Navigation.pop('Add');
    setValue('');
    Toast.show('Data Added.');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={10}
        onChangeText={text => setValue(text)}
        value={value}
        placeholder="Add Your Text Here..."
      />
      <Pressable style={styles.button} onPress={() => onAdd()}>
        <Text style={styles.text}>Done</Text>
      </Pressable>
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
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0A45EF',
    marginTop: 30,
  },
  input: {
    textAlignVertical: 'top',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 7,
    width: windowWidth * 0.9,
  },

  container: {
    backgroundColor: '#F1F1F1',

    padding: 16,
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default AddScreen;
