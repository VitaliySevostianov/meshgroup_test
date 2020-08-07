import React from 'react';
import {View, Text, Linking} from 'react-native';

import styles from '../styles';

const DriverInfo = ({route}) => {
  const driver = route.params.data;
  return (
    <>
      <View style={styles.driverInfoCard}>
        <Text>Родился: {driver.dateOfBirth}</Text>
      </View>
      <View style={styles.driverInfoCard}>
        <Text>Имя: {driver.givenName}</Text>
      </View>
      <View style={styles.driverInfoCard}>
        <Text>Фамилия: {driver.familyName}</Text>
      </View>
      <View style={styles.driverInfoCard}>
        <Text>Идентификатор: {driver.driverId}</Text>
      </View>
      <View style={styles.driverInfoCard}>
        <Text>Национальность: {driver.nationality}</Text>
      </View>
      <View style={styles.driverInfoCardWL}>
        <Text>Википедия: </Text>
        <Text
          style={{color: 'blue'}}
          onPress={() => Linking.openURL(driver.url)}>
          Перейти...
        </Text>
      </View>
    </>
  );
};

export default DriverInfo;
