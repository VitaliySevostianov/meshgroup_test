import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './Redux/store';

import Main from './Screens/Main';
import DriverInfo from './Screens/DriverInfo';
import DriverRaces from './Screens/DriverRaces';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const MainStack = createStackNavigator();

const MainNav = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Главная">
        <MainStack.Screen
          name="Главная"
          options={{headerShown: false}}
          component={Main}
        />
        <MainStack.Screen name="Гонщик" component={DriverInfo} />
        <MainStack.Screen name="Гонки" component={DriverRaces} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

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
