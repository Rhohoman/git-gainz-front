import React,{Component} from 'react'
import { createStackNavigator,createAppContainer,createDrawerNavigator,createSwitchNavigator} from 'react-navigation'

import { DrawerActions } from 'react-navigation';
import { View, Image, TouchableOpacity } from 'react-native';
import MainTabNavigator from './MainTabNavigator'

import {Text} from 'react-native'

// import HomeScreen from '../screens/HomeScreen';

import WorkoutScreen from '../screens/WorkoutScreen'
import SettingsScreen from '../screens/SettingsScreen';
import ScheduleListScreen from '../screens/ScheduleListScreen.js'

import LoginScreen from '../screens/AuthScreens/LoginScreen.js'
import SignupScreen from '../screens/AuthScreens/SignupScreen.js';
import AuthLoadingScreen from '../screens/AuthScreens/AuthLoadingScreen.js'
import HistoryScreen from '../screens/History/HistoryScreen.js'

import WorkoutListScreen from '../screens/WorkoutListScreen.js';
import StatScreen from '../screens/StatScreen/StatScreen.js'

//login stack
const LoginStack = createStackNavigator({
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen },
}, {
  headerMode: 'float',
  defaultNavigationOptions:  ({ navigation }) => ({

    headerStyle: {backgroundColor: '#E73536'},
    title: 'You are not logged in',
    headerTintColor: 'white',

  })

})


const WorkoutStack = createStackNavigator({
  ScheduleList:ScheduleListScreen,
  WorkoutList:WorkoutListScreen,
  Workout: WorkoutScreen,
},{
  // Default config for all screens
  defaultNavigationOptions:  ({ navigation }) => ({

    headerTintColor: 'black',

  }),

  headerStyle: {backgroundColor: '#E73536'},

  headerMode: 'screen',
  cardStyle:{backgroundColor:'powderblue'},
  title:'Main',
  drawerLabel: 'Workout Schedules',
  initialRouteName: 'ScheduleList',

}

);
const HistoryStack = createStackNavigator({
  WorkoutHistory:HistoryScreen,
  Workout: WorkoutScreen,
},{
  // Default config for all screens
  defaultNavigationOptions:  ({ navigation }) => ({

    headerTintColor: 'black',

  }),

  headerStyle: {backgroundColor: '#E73536'},

  headerMode: 'screen',
  cardStyle:{backgroundColor:'powderblue'},
  title:'Completed Workouts',
  drawerLabel: 'History',
  initialRouteName: 'WorkoutHistory',

}

);


const StatStack = createStackNavigator({
  WorkoutStats:StatScreen,
},{
  // Default config for all screens
  defaultNavigationOptions:  ({ navigation }) => ({

    headerTintColor: 'black',

  }),

  headerStyle: {backgroundColor: '#E73536'},

  headerMode: 'screen',
  cardStyle:{backgroundColor:'powderblue'},
  title:'Workout Statistics',
  drawerLabel: 'Stats',
  initialRouteName: 'WorkoutStats',

}

);

const DrawerStack =createDrawerNavigator({

  // screen1: { screen: LoginScreen },
  "Workout Schedules": { screen: WorkoutStack},
  "History":{screen:HistoryStack},
	"Stats":{screen:StatStack},
  screen3: { screen: SettingsScreen},

},
  {
    headerStyle: {backgroundColor: '#E73536'},
    headerMode: 'float',
    title:'Main',
    }
)

// screen2: { screen: ScheduleListScreen },
const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'green'},
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
  })
})

// Manifest of possible screens
// createStackNavigator
const PrimaryNav = createSwitchNavigator({
  // authStack:{screen:AuthLoadingScreen},
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation },
  workoutStack:{screen:WorkoutStack},
  historyStack:{screen:HistoryStack},
	statStack:{screen:StatStack},
}, {
  // Default config for all screens


  // headerMode: 'none',
  // title:'Main',
  initialRouteName: 'loginStack',

  }
)


export default createAppContainer(PrimaryNav);
