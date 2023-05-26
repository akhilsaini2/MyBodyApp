import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from 'react-native';

export default class HomeScreen extends Component {
  Acupressures() {
    this.props.navigation.navigate('Accupressure');
  }
  Asanas() {
    this.props.navigation.navigate('Asana');
  }
  Exercises() {
    this.props.navigation.navigate('Exercise');
  }
  FoodHabits() {
    this.props.navigation.navigate('FoodHabit');
  }
  Contact(){
  this.props.navigation.navigate('Contact');
  }
  render() {
    return (
      <View>

       <Text style={styles.text}>My Body App</Text>
     
          <ImageBackground
           source={require('../Images/MYBODYbg1.jpg')}
            style={styles.backgroundImage}></ImageBackground>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            this.Asanas();
          }}>
          <Text style={styles.buttonText1}>Yoga Asanas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            this.Exercises();
          }}>
          <Text style={styles.buttonText2}>Exercises</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            this.Acupressures();
          }}>
          <Text style={styles.buttonText3}>Acupressures</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button4}
          onPress={() => {
            this.FoodHabits();
          }}>
          <Text style={styles.buttonText4}>Food Habits</Text>
        </TouchableOpacity>

         <TouchableOpacity
          style={styles.buttonCU}
          onPress={() => {
            this.Contact();
          }}>
          <Text style={styles.buttonTextCU}>Contact Us 📞</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
  textAlign: 'center',
  color: 'yellow',
  fontSize: 40,
  },
  button1: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 70,
    width: 200,
    height: 50,
    backgroundColor: 'green',
  },
  buttonText1: {
    textAlign: 'center',
    color: 'white',
  },
  button2: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: 'blue',
  },
  buttonText2: {
    textAlign: 'center',
    color: 'white',
  },
  button3: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: 'red',
  },
  buttonText3: {
    textAlign: 'center',
    color: 'white',
  },
  button4: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: 'purple',
  },
  buttonText4: {
    textAlign: 'center',
    color: 'white',
  },
  /*text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'yellow',
  },*/
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: 500,
   },
   buttonCU: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 30,
    marginTop: 50,
    width: 120,
    height: 50,
    backgroundColor: 'white',
  },
  buttonTextCU: {
  textAlign: 'center',
  color:'Black'
  },
  header: {
  textAlign: 'center',
  color: 'yellow',
  fontSize: 40
  }
});
