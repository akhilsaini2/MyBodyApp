import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';

import DailyRoutine from './ExerciseScreens/BExercises';
import Fitness from './ExerciseScreens/Fitness';


export default class Asana extends React.Component {
  BExercises() {
    this.props.navigation.navigate('BExercises');
  }
  Fitness() {
    this.props.navigation.navigate('Fitness');
  }
  Back1() {
    this.props.navigation.navigate('HomeScreen');
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
           // source={require('../images/MYBODYbg1.jpg')}
            style={styles.backgroundImage3}></ImageBackground>
        </View>

        <Text style={styles.text3}>Exercises</Text>

        <TouchableOpacity
          style={styles.button10}
          onPress={() => {
            this.BExercises();
          }}>
          <Text style={styles.buttonText10}>Breathing Exercises</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button11}
          onPress={() => {
            this.Fitness();
          }}>
          <Text style={styles.buttonText11}>Fitness</Text>
        </TouchableOpacity>

 <TouchableOpacity
          style={styles.button14}
          onPress={() => {
            this.Back1();
          }}>
          <Text style={styles.buttonText14}>Back</Text>
         </TouchableOpacity>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
text3: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    color: 'black',
    fontSize:30
  },
button10: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 120,
    width: 200,
    height: 50,
    backgroundColor: 'blue'
  },
buttonText10: {
    textAlign: 'center',
    color: 'white'
  },
  button11: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 40,
    width: 200,
    height: 50,
    backgroundColor: 'red'
  },
  buttonText11: {
    textAlign: 'center',
    color: 'white'
  },
  backgroundImage3: {
    flex: 1,
    width: 332,
    height: 515,
  },
  button14: {
     justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 50,
    height: 50,
    backgroundColor: 'black'
  },
  buttonText14: {
  textAlign: 'center',
    color: 'white',
  }
});