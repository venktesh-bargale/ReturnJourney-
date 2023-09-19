import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import GameScreen from './src/Screens/GameScreen';
import GreenLightRedLight from './src/Components/GreenLightRedLight';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
         
        />
        <Stack.Screen name="GreenLightRedLight" component={GreenLightRedLight} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
