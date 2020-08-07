import {Alert} from 'react-native';
import axios from 'axios';
import RNExitApp from 'react-native-exit-app';

const getDriversData = async (page) => {
  try {
    const offset = 10;
    const limit = 10;
    const response = await axios.get(
      `https://ergast.com/api/f1/drivers.json?limit=${limit}&offset=${
        offset * page
      }`,
    );
    const data = await response.data.MRData.DriverTable.Drivers;
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

export default getDriversData;
