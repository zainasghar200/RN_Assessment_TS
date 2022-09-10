import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Navigation} from 'react-native-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {SET_DATA} from '../src/redux/actionTypes';
import {setData} from '../src/redux/actions';
import FAB from '../components/FAB';
import {InitialState} from '../src/interfaces/interfaces';

const ModalScreen = (props: any) => {
  //const listData = useSelector((state: InitialState) => state.data);

  let dataReducer: any = useSelector(state => state);
  dataReducer = dataReducer['dataReducer'];
  let listData: [] = dataReducer['data'];

  const dispatch = useDispatch();

  const goToScreen = (screen: string) => {
    console.log(screen);
    Navigation.push(props.componentId, {
      component: {
        name: screen,
      },
    });
  };
  useEffect(() => {
    if (listData.length <= 0) {
      const url = 'https://gorest.co.in/public/v2/posts';
      fetch(url)
        .then(res => res.json())
        .then(resJson => {
          setData(resJson, dispatch);
        })
        .catch(e => console.log(e));
    }
  }, []);
  return (
    <View style={styles.main}>
      <SafeAreaView>
        <FlatList
          contentContainerStyle={{paddingBottom: 100}}
          data={listData}
          renderItem={({item}) => (
            <View style={styles.containerParent}>
              <View style={styles.container}>
                <Text>{item['title']}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item['id']}
          extraData={listData}
        />
      </SafeAreaView>
      <FAB onPress={() => goToScreen('Add')} title="Add" />
    </View>
  );
};
ModalScreen.options = {
  topBar: {
    rightButtons: {
      id: 'dismiss',
      icon: require('../assets/icons/dismiss.png'),
    },
  },
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#F1F1F1',
  },
  flatList: {
    paddingBottom: 445,
  },
  containerParent: {
    paddingHorizontal: 15,
  },
  container: {
    padding: 16,
    margin: 'auto',
    marginTop: 15,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000000',
    borderColor: 'black',

    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default ModalScreen;
