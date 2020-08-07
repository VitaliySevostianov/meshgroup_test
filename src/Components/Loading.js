import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from '../styles';

const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color="lime" size={100}></ActivityIndicator>
    </View>
  );
};

export default Loading;
