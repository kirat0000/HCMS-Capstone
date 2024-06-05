import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './Apps/Screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChooseLogin from './Apps/Screens/ChooseLogin';
import PatientLogin from './Apps/Screens/PatientLogin';
import DoctorLogin from './Apps/Screens/DoctorLogin';

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="ChooseLogin" component={ChooseLogin} />
      <Stack.Screen name="PatientLogin" component={PatientLogin} />
      <Stack.Screen name="DoctorLogin" component={DoctorLogin} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
