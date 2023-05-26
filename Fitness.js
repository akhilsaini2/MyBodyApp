import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

export default class Fitness extends React.Component {
  Exercise() {
    this.props.navigation.navigate('Exercise');
  }

  render() {
    return (
      <View>
        <Text style={styles.text33}>Fitness</Text>
        <Text>Here are some exercises that you need to do daily apart from Yoga(you should at least do minimum of two exercises) : </Text>
        <Text>1. Rope skipping</Text>
        <Text>2. Running</Text>
        <Text>3. Cycling</Text>
        <Text>4. Playing Sports</Text>
        <Text>5. Meditation***(It is not related to fitness but it plays a key role in our daily life)</Text>
        <Text></Text>
        <Text>***MEDITATION : </Text>
        <Text>There is no particular pose to meditate. Scholars sometimes sit in Padmasana or Ardha-Padmasana to meditate but meditation is mind training to bring yourself back tothe present. Our body is always wandering in the future, past, day-dreaming. This Habit of meditation or Dhyana releives us from fantasies, depression, anxiety,etc. </Text>
        <TouchableOpacity
          style={styles.button16}
          onPress={() => {
            this.Exercise();
          }}>
          <Text style={styles.buttonText16}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text33: {
    textAlign: 'center',
    fontSize: 30,
    color: 'pink',
  },
  button16: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
  buttonText16: {
    textAlign: 'center',
    color: 'white',
  },
});
