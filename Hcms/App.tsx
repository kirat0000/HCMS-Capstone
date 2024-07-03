import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './Apps/Screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChooseLogin from './Apps/Screens/ChooseLogin';
import PatientLogin from './Apps/Screens/PatientLogin';
import DoctorLogin from './Apps/Screens/DoctorLogin';
import SignUpPage from './Apps/Screens/SignUp';
import PatientHomeScreen from './Apps/Screens/PatientHomeScreen';
import DoctorHomeScreen from './Apps/Screens/DoctorHomeScreen'
import EditPersonalInformation from './Apps/Screens/EditPersonalPage';
import UpcomingAppointments from './Apps/Screens/UpcomingAppointments';
import PatientSearch from './Apps/Screens/PatientSearch';
import MedicalHistory from './Apps/Screens/PatientScreen/MedicalHistory';
import AppointmentRecords from './Apps/Screens/PatientScreen/AppointmentRecords';
import BookAppointment from './Apps/Screens/PatientScreen/BookAppointment';
import EditPatientDetails from './Apps/Screens/PatientScreen/EditPatientDetails';
import UpdateMedicalRecord from './Apps/Screens/UpdateMedicalRecord';
import EnterPrescription from './Apps/Screens/EnterPrescription';
import Reports from './Apps/Screens/DoctorScreen/Reports';
import { LogBox } from 'react-native';
import Graphs from './Apps/Screens/DoctorScreen/Graphs';
import DailyReports from './Apps/Screens/DoctorScreen/DailyReports';
import MonthlyReports from './Apps/Screens/DoctorScreen/MonthlyReports';
import { ModalPortal } from 'react-native-modals';
const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreAllLogs();
  return (    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="ChooseLogin" component={ChooseLogin} />
      <Stack.Screen name="PatientLogin" component={PatientLogin} />
      <Stack.Screen name="DoctorLogin" component={DoctorLogin} />
      <Stack.Screen name="SignUP" component={SignUpPage} />
      <Stack.Screen name="PHomeScreen" component={PatientHomeScreen} />
      <Stack.Screen name="DHomeScreen" component={DoctorHomeScreen} />
      <Stack.Screen name="EditPersonalInformation" component={EditPersonalInformation}/>
      <Stack.Screen name="UpcomingAppointments" component={UpcomingAppointments}/>
      <Stack.Screen name="UpdateMedicalRecord" component={UpdateMedicalRecord}/>
      <Stack.Screen name="PatientSearch" component={PatientSearch}/>
      <Stack.Screen name="MedicalHistory" component={MedicalHistory} />
      <Stack.Screen name="AppointmentRecords" component={AppointmentRecords}/>
      <Stack.Screen name="BookAppointment" component={BookAppointment}/>
      <Stack.Screen name="EditPatientDetails" component={EditPatientDetails}/>
      <Stack.Screen name="EnterPrescription" component={EnterPrescription}/>
      <Stack.Screen name="Reports" component={Reports}/>
      <Stack.Screen name="Graph" component={Graphs}/>
      <Stack.Screen name="Daily Report" component={DailyReports}/>
      <Stack.Screen name="Monthly Report" component={MonthlyReports}/>

    </Stack.Navigator>
    <ModalPortal />
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
