import {Alert} from 'react-native';
import axios from 'axios';
import RNExitApp from 'react-native-exit-app';

const getRacesData = async (page) => {
  try {
    const offset = 10;
    const limit = 10;
    const response = await axios.get(
      `https://ergast.com/api/f1.json?limit=${limit}&offset=${offset * page}`,
    );
    const data = await response.data.MRData.RaceTable.Races;
    return data;
  } catch {
    Alert.alert(
      'Неполадки в сети',
      'Проверьте интернет соединение и перезапустите приложение',
      [{text: 'OK', onPress: () => RNExitApp.exitApp()}],
      {cancelable: false},
    );
  }
};

export default getRacesData;
