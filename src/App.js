import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Main from './Components/Main';
import DriverInfo from './Components/DriverInfo';
import DriverRaces from './Components/DriverRaces';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Header} from 'react-native/Libraries/NewAppScreen';

const DriverStack = createStackNavigator();
const MainStack = createStackNavigator();

const DriverNav = (props) => {
  const data = props.route.params;
  return (
    // <NavigationContainer>
    <DriverStack.Navigator initialRouteName="Досье">
      <DriverStack.Screen name="Досье">
        {(props) => <DriverInfo {...props} extraData={data} />}
      </DriverStack.Screen>
    </DriverStack.Navigator>
  );
};
const DriverRacesNav = (props) => {
  const data = props.route.params;
  return (
    <DriverStack.Navigator initialRouteName="Гонки">
      <DriverStack.Screen name="Гонки">
        {(props) => <DriverRaces {...props} extraData={data} />}
      </DriverStack.Screen>
    </DriverStack.Navigator>
  );
};
const MainNav = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Главная" headerMode="none">
        <MainStack.Screen name="Главная" component={Main} />
        <MainStack.Screen name="Гонщик" component={DriverNav} />
        <MainStack.Screen name="Гонки" component={DriverRacesNav} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './Redux/reducer';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="dark-content" backgroundColor="#22334400" />
          <SafeAreaView style={{flex: 1}}>
            <MainNav></MainNav>
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
