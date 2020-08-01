import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  BackHandler,
} from 'react-native';

import axios from 'axios';

import styles from '../styles';

import {store} from '../Redux/reducer';
import {setCurrentDriversPage} from '../Redux/actions';

const Main = ({navigation}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentDrivers, setCurrentDrivers] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    store.getState().currentDriversPage,
  );
  const offset = 10;
  const limit = 10;
  const getData = async () => {
    try {
      setIsLoaded(false);
      const response = await axios.get(
        `https://ergast.com/api/f1/drivers.json?limit=${limit}&offset=${
          offset * currentPage
        }`,
      );
      setCurrentDrivers(await response.data.MRData.DriverTable.Drivers);
      setIsLoaded(true);
    } catch {
      Alert.alert(
        'Неполадки в сети',
        'Проверьте интернет соединение и перезапустите приложение',
        [{text: 'OK', onPress: () => BackHandler.exitApp()}],
        {cancelable: false},
      );
    }
  };

  useEffect(() => {
    store.dispatch(setCurrentDriversPage(currentPage));
    getData();
    return () => {};
  }, [currentPage]);

  if (isLoaded === true) {
    return (
      <View style={styles.main}>
        <View style={styles.list}>
          <FlatList
            data={currentDrivers}
            renderItem={({item}) => {
              return (
                <View style={styles.listItem}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Гонщик', {data: item})}>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                      }}>
                      <Text>
                        {item.givenName} {item.familyName}
                      </Text>
                      <Text> {item.nationality}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item, i) => `${i}`}></FlatList>
        </View>
        <Text
          onPress={() => navigation.navigate('Гонки')}
          style={styles.linkToRaces}>
          Перейти к гонкам
        </Text>
        <View style={styles.pages}>
          <Button
            title="Назад"
            color={currentPage >= 1 ? '' : 'grey'}
            onPress={() =>
              currentPage >= 1
                ? setCurrentPage(currentPage - 1)
                : console.log('No')
            }></Button>
          <Text>{currentPage + 1}</Text>
          <Button
            title="Дальше"
            color={currentDrivers.length == 10 ? '' : 'grey'}
            onPress={() =>
              currentDrivers.length == 10
                ? setCurrentPage(currentPage + 1)
                : console.log('No')
            }></Button>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="lime" size={100}></ActivityIndicator>
      </View>
    );
  }
};

export default Main;
