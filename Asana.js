import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

export default class Asana extends React.Component {
  BackPain() {
    this.props.navigation.navigate('BackPain');
  }
  Focus() {
    this.props.navigation.navigate('Focus');
  }
  JointPain() {
    this.props.navigation.navigate('JointPain');
  }
  NeckPain() {
    this.props.navigation.navigate('NeckPain');
  }
  StomachProblems() {
    this.props.navigation.navigate('StomachProblems');
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
            style={styles.backgroundImage2}></ImageBackground>
        </View>

        <Text style={styles.text2}>Yoga Asanas</Text>

        <TouchableOpacity
          style={styles.button5}
          onPress={() => {
            this.BackPain();
          }}>
          <Text style={styles.buttonText5}>Back Pain</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button6}
          onPress={() => {
            this.Focus();
          }}>
          <Text style={styles.buttonText6}>Focus and Concentration</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button7}
          onPress={() => {
            this.JointPain();
          }}>
          <Text style={styles.buttonText7}>Joint Pain</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button8}
          onPress={() => {
            this.NeckPain();
          }}>
          <Text style={styles.buttonText8}>Neck Pain</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button9}
          onPress={() => {
            this.StomachProblems();
          }}>
          <Text style={styles.buttonText9}>Stomach Problems</Text>
        </TouchableOpacity>

         <TouchableOpacity
          style={styles.button12}
          onPress={() => {
            this.Back1();
          }}>
          <Text style={styles.buttonText12}>Back</Text>
        </TouchableOpacity>

      </View>
      
    );
  }
}
const styles = StyleSheet.create({
text2: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    color: 'black',
    fontSize:30
  },
button5: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 80,
    width: 200,
    height: 50,
    backgroundColor: 'red',
  },
buttonText5: {
    textAlign: 'center',
    color: 'white',
  },
  button6: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: 'lime',
  },
  buttonText6: {
    textAlign: 'center',
    color: 'white',
  },
  button7: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: 'magenta',
  },
  buttonText7: {
    textAlign: 'center',
    color: 'white',
  },
  button8: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: 'blue',
  },
  buttonText8: {
    textAlign: 'center',
    color: 'white',
  },
  button9: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: 'green',
  },
  buttonText9: {
    textAlign: 'center',
    color: 'white',
  },
  backgroundImage2: {
    flex: 1,
    width: 332,
    height: 515,
  },
  button12:{
  justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 50,
    height: 50,
    backgroundColor: 'black'
  },
  buttonText12:{
    textAlign: 'center',
    color: 'white',
    
  }
});
