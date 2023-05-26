import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Focus extends React.Component {
  Asana() {
    this.props.navigation.navigate('Asana');
  }
  render() {
    return (
      <View>
        <Text style={styles.textF}>Focus and Concentration</Text>

        <Text>PADMASANA (LOTUS POSE)</Text>
        <Image
         source={require('./Focus1.jpg')}
          style={styles.imageF1}></Image>

          <Text>To do this:</Text>
          <Text>1. Sit on the floor or on a mat with legs stretched out in front of you while keeping the spine erect.</Text>
          <Text>2. Bend the right knee and place it on the left thigh. Make sure that the sole of the feet point upward and the heel is close to the abdomen.</Text>
          <Text>3. Now, repeat the same step with the other leg.</Text>
          <Text>4. With both the legs crossed and feet placed on opposite thighs, place your hands on the knees in mudra position.</Text>
          <Text>5. Keep the head straight and spine erect.</Text>
          <Text>6. Hold and continue with gentle long breaths in and out.</Text>

          <Text>GARUDASANA (EAGLE POSE)</Text>

           <Image
          source={require('./Focus2.webp')}
          style={styles.imageF2}></Image>

          <Text>To do this:</Text>
          <Text>1. Stand in Tadasana or “Mountain Pose” which involves your feet being slightly apart.</Text>
          <Text>2. Bend both knees and lift your right foot. At a slow pace wrap your right thigh over your left. </Text>
          <Text>3. Following this curl your right foot behind your left calf and hook it there. Make sure your knees don’t feel any strain and ensure your left knee faces forward.</Text>
          <Text>4. Bring your arms forward and wrap your left arm over your right arm such that your left elbow crosses over your right upper arm. Bring your right hand toward your face and cross your forearms and press your palms together. Your elbows should be raised to shoulder height.</Text>
          <Text>5. Maintain this position for five deep breaths and feel your upper back strech.
Return to the original Tadasana posture and repeat with the other side.</Text>

        <TouchableOpacity
          style={styles.buttonF}
          onPress={() => {
            this.Asana();
          }}>
          <Text style={styles.buttonTextF}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textF: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: 'green',
    marginTop: 20,
  },
  buttonF: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
  buttonTextF: {
    textAlign: 'center',
    color: 'white',
  },
  imageF1: {
    width: 250,
    height: 200,
  },
  imageF2: {
    width: 250,
    height: 300,
  }
});
