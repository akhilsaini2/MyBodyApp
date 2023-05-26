import * as React from 'react';
import 'react-native-gesture-handler';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Accupressure from './screens/Screens-2/Acupressure';
import Asana from './screens/Screens-2/Asana';
import Exercise from './screens/Screens-2/Exercise';
import FoodHabit from './screens/Screens-2/FoodHabit';

import BackPain from './screens/Screens-2/AsanaScreens/BackPain';
import Focus from './screens/Screens-2/AsanaScreens/Focus';
import JointPain from './screens/Screens-2/AsanaScreens/JointPain';
import NeckPain from './screens/Screens-2/AsanaScreens/NeckPain';
import StomachProblems from './screens/Screens-2/AsanaScreens/StomachProblems';

import Contact from './screens/Contact';

import BExercises from './screens/Screens-2/ExerciseScreens/BExercises';
import Fitness from './screens/Screens-2/ExerciseScreens/Fitness';

import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Accupressure: Accupressure,
  Asana: Asana,
  Exercise: Exercise,
  FoodHabit: FoodHabit,
  BackPain: BackPain,
  Focus: Focus,
  JointPain: JointPain,
  NeckPain: NeckPain,
  StomachProblems: StomachProblems,
  BExercises: BExercises,
  Fitness: Fitness,
  Contact: Contact,
});

const AppContainer = createAppContainer(AppNavigator);
