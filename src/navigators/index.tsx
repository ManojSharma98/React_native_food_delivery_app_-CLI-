import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen, WelcomeScreen,SignInScreen} from '../screens';

const Stack = createStackNavigator();

const Navigators = () => { 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
