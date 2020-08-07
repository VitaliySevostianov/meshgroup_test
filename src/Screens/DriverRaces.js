import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Button} from 'react-native';

import getRacesData from '../functions/api/getRacesData';

import styles from '../styles';
import Loading from '../Components/Loading';

const mapStateToProps = (state) => ({
  currentRacesPage: state.currentRacesPage,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentRacesPage: (page) =>
    dispatch({type: 'SET_CURRENT_RACES_PAGE', payload: page}),
});

import {connect} from 'react-redux';

const DriverRaces = ({currentRacesPage, setCurrentRacesPage}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRaces, setCurrentRaces] = useState([]);

  useEffect(() => {
    setIsLoaded(false);
    getRacesData(currentRacesPage).then((data) => {
      if (data !== undefined) {
        setCurrentRaces(data);
        setIsLoaded(true);
      }
    });
    return () => {};
  }, [currentRacesPage]);

  if (isLoaded === true) {
    return (
      <View style={styles.main}>
        <View style={styles.list}>
          <FlatList
            data={currentRaces}
            renderItem={({item}) => {
              return (
                <View style={styles.listItem}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <Text>
                      {item.raceName} {item.season}
                    </Text>
                    <Text> {item.Circuit.Location.country}</Text>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item, i) => `${i}`}></FlatList>
        </View>
        <View style={styles.pages}>
          <Button
            title="Назад"
            color={currentRacesPage >= 1 ? '' : 'grey'}
            onPress={() =>
              currentRacesPage >= 1 && setCurrentRacesPage(currentRacesPage - 1)
            }></Button>
          <Text>{currentRacesPage + 1}</Text>
          <Button
            title="Дальше"
            color={currentRaces.length == 10 ? '' : 'grey'}
            onPress={() =>
              currentRaces.length == 10 &&
              setCurrentRacesPage(currentRacesPage + 1)
            }></Button>
        </View>
      </View>
    );
  } else {
    return <Loading />;
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverRaces);
