import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Dashboard from '../Screen/Dashaboard';
import * as React from 'react';
import {Image} from 'react-native';
import {images} from '../theme/images';

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
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
    </Tab.Navigator>
  );
}

export default BottomTab;
