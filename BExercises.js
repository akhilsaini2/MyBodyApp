import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class breathingExercises extends React.Component {
  Exercise() {
    this.props.navigation.navigate('Exercise');
  }

  render() {
    return (
      <View>
        <Text style={styles.text33}>Breathing Exercises</Text>

        <Image source={require('./BE.jpg')} style={styles.image1}></Image>

        <Text>
          The name "Ujjayi Pranayama" is derived from the Sanskrit word
          “Ujjayi,” which means to conquer. This form of pranayama helps to keep
          your mind calm and body warm. You have to take a deep breath from both
          the nostrils with a half-closed glottis.
        </Text>
        <Text>How to do it:</Text>
        <Text>
          Step 1: Sit down on the ground in any meditative pose with closed eyes
          and spine neutral.
        </Text>
        <Text>
          Step 2: Take deep breaths in and out through your mouth. Feel the air
          passing through your windpipe.
        </Text>
        <Text>
          Step 3: Once you are comfortable with your exhales, try to contract
          the back of your throat (your glottis or soft palate), constricting
          the passage of air. There will be a soft hissing sound.
        </Text>
        <Text>
          Step 4: Once you are comfortable with the exhales, apply the same
          contraction of the throat while inhaling.
        </Text>
        <Text>
          Step 5: When you are able to contract your throat on both inhale and
          exhale, close the mouth and start breathing through the nose.
        </Text>
        <Text>
          Step 6: When you are breathing, the air should fill your lungs to the
          fullest. Start with 5 minutes then increase your timing.
        </Text>

        <TouchableOpacity
          style={styles.button15}
          onPress={() => {
            this.Exercise();
          }}>
          <Text style={styles.buttonText15}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image1: {
    width: 250,
    height: 200,
  },
  text33: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: 'pink',
    marginTop: 20,
  },
  button15: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
  buttonText15: {
    textAlign: 'center',
    color: 'white',
  },
});
