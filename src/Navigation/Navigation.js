import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import SearchScreen from '../Screen/SearchScreen';
import LoginScreen from '../Screen/LoginScreen';
// import auth from '@react-native-firebase/auth';
import MovieDetailScreen from '../Screen/MovieDetailScreen';
import {useSelector} from 'react-redux';

const AppStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

export default function Navigation() {
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();
  const {isLogin} = useSelector(state => state.auth);
  // Handle user state changes
  // function onAuthStateChanged(userDetail) {
  //   setUser(userDetail);
  //   if (initializing) {
  //     setInitializing(false);
  //   }
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const App = () => (
    <AppStack.Navigator
      headerMode="none"
      initialRouteName="BottomTab"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        gestureDirection: 'horizontal',
      }}>
      <AppStack.Screen name="BottomTab" component={BottomTab} />
      <AppStack.Screen name="SearchScreen" component={SearchScreen} />
      <AppStack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
    </AppStack.Navigator>
  );

  const Auth = () => (
    <AuthStack.Navigator
      headerMode="none"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        gestureDirection: 'horizontal',
      }}
      initialRouteName="LoginScreen">
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    </AuthStack.Navigator>
  );
  return (
    <NavigationContainer>{!isLogin ? <Auth /> : <App />}</NavigationContainer>
  );
}
