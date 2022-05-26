import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ToysSearch from '../screens/ToysSearch';
import ToyDetail from '../screens/ToyDetail';

const Stack = createNativeStackNavigator();

const StackProvider = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ToysSearch">
        <Stack.Screen
          name={'ToysSearch'}
          component={ToysSearch}
          options={{
            title: 'Search/Add toys',
          }}
        />
        <Stack.Screen
          name={'ToyDetail'}
          component={ToyDetail}
          options={{
            title: 'Toy',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackProvider;
