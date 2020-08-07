import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Button, TouchableOpacity} from 'react-native';

const mapStateToProps = (state) => ({
  currentDriversPage: state.currentDriversPage,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentDriversPage: (page) =>
    dispatch({type: 'SET_CURRENT_DRIVERS_PAGE', payload: page}),
});

import {connect} from 'react-redux';

import styles from '../styles';
import Loading from '../Components/Loading';

import getDriversData from '../functions/api/getDriversData';

const Main = ({navigation, currentDriversPage, setCurrentDriversPage}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentDrivers, setCurrentDrivers] = useState([]);
  useEffect(() => {
    setIsLoaded(false);
    getDriversData(currentDriversPage).then((data) => {
      if (data !== undefined) {
        setCurrentDrivers(data);
        setIsLoaded(true);
      }
    });
    return () => {};
  }, [currentDriversPage]);

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
            color={currentDriversPage >= 1 ? '' : 'grey'}
            onPress={() =>
              currentDriversPage >= 1 &&
              setCurrentDriversPage(currentDriversPage - 1)
            }></Button>
          <Text>{currentDriversPage + 1}</Text>
          <Button
            title="Дальше"
            color={currentDrivers.length == 10 ? '' : 'grey'}
            onPress={() =>
              currentDrivers.length == 10 &&
              setCurrentDriversPage(currentDriversPage + 1)
            }></Button>
        </View>
      </View>
    );
  } else {
    return <Loading />;
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
