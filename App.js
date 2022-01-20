import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//FIREBASE 
import { loadFirebaseConfiguration } from './app/utils/FirebaseConfig';

//Screens
import { ContactsScreen } from './app/screens/ContactsScreen';
import { ContactFormScreen } from './app/screens/ContactFormScreen';
import {SearchScreen } from './app/screens/SearchScreen';
//creación de variables
const ContactsNav = createNativeStackNavigator();
const SearchNav = createMaterialTopTabNavigator();

//Esquemas de navegación
const StackContacts = () => {
  return (
    <ContactsNav.Navigator>
      <ContactsNav.Screen name="Contacts" component={ContactsScreen} options={{ headerShown: false }} />
      <ContactsNav.Screen name="ContactForm" component={ContactFormScreen} options={{ headerShown: false }} />
    </ContactsNav.Navigator>

  );
}
const TopNavSearch = () => {
  return (
    <SearchNav.Navigator>
      <SearchNav.Screen name="Contactos" component={StackContacts} />
      <SearchNav.Screen name="Search" component={SearchScreen} />
    </SearchNav.Navigator>
  );
}

//Ignorar el warning
LogBox.ignoreLogs([
  'Setting a timer',
]);



export default App = () => {
  loadFirebaseConfiguration();
  return (
    <NavigationContainer>
      <TopNavSearch />

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
