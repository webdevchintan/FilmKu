/* eslint-disable no-sparse-arrays */
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Dashboard from '../Screen/Dashaboard';
import * as React from 'react';
import {Alert, Image, Text} from 'react-native';
import {images} from '../theme/images';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';

const Tab = createMaterialBottomTabNavigator();

const logoutConfirm = () =>
  Alert.alert('Are you sure?', 'you want to logout', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {
      text: 'OK',
      onPress: () => {
        auth()
          .signOut()
          .then(() => console.log('User signed out!'));
      },
    },
    ,
  ]);

const Logout = () => <Text>Logout</Text>;
function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        showLabel: false,
      }}
      barStyle={{backgroundColor: '#ffffff'}}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={images.cinema}
              style={{tintColor: focused ? '' : 'grey'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={images.tickit}
              style={{tintColor: focused ? 'blue' : 'grey'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BookMark"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={images.bookmark}
              style={{tintColor: focused ? 'blue' : 'grey'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={Logout}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Icon name="logout" size={24} color={focused ? 'blue' : 'grey'} />
          ),
        }}
        listeners={{
          tabPress: e => {
            // Prevent default action
            e.preventDefault();
            logoutConfirm();
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
