import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Navigation} from 'react-native-navigation';
import {useDispatch, useSelector} from 'react-redux';
import {setData} from '../redux/actions';
import FAB from '../components/FAB';
import {Data} from '../types/types';
import Toast from 'react-native-simple-toast';

const ModalScreen = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);

  let dataReducer: any = useSelector(state => state);
  dataReducer = dataReducer['dataReducer'];
  let listData: Data[] = dataReducer['data'];

  const dispatch = useDispatch();

  const goToScreen = (screen: string) => {
    Navigation.push(props.componentId, {
      component: {
        name: screen,
      },
    });
  };
  useEffect(() => {
    if (listData.length <= 0) {
      setIsLoading(true);
      const url = 'https://gorest.co.in/public/v2/posts';
      fetch(url)
        .then(res => res.json())
        .then(resJson => {
          setData(resJson, dispatch);
          setIsLoading(false);
        })
        .catch(e => {
          setIsLoading(false);
          Toast.show('Something went wrong!');
        });
    }
  }, []);
  return (
    <View style={styles.main}>
      {isLoading && <ActivityIndicator size="large" color="#0A45EF" />}
      {!isLoading && (
        <View>
          <SafeAreaView>
            <FlatList
              contentContainerStyle={{paddingBottom: 100}}
              data={listData}
              renderItem={({item}) => (
                <View style={styles.containerParent}>
                  <View style={styles.container}>
                    <Text>{item.title}</Text>
                  </View>
                </View>
              )}
              extraData={listData}
            />
          </SafeAreaView>
          <FAB onPress={() => goToScreen('Add')} title="Add" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    backgroundColor: '#F1F1F1',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
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
