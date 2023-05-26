import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class StomachProblems extends React.Component {
  Asana() {
    this.props.navigation.navigate('Asana');
  }
  render() {
    return (
      <View>
        <Text style={styles.textSP}>Stomach Problems</Text>

          <Text>PARSVA SUKHASANA (SEATED SIDE BENDING POSE)</Text>

          <Image
          source={require('./StomachProblem1.png')}
          style={styles.imageSP1}></Image>

          <Text>To Do This:</Text>
          <Text>1. Start in easy pose and place your left hand on the floor with your elbow slightly bent.</Text>
          <Text>2. Reach your right arm up and overhead and lean to the left side.</Text>
          <Text>3. Hold the pose for 30 seconds to 1 minute, switch sides, and repeat.</Text>
          
         <Text>ARDHA MATSYENDRASANA (HALF LORD OF THE FISHES POSE)</Text>

          <Image
          source={require('./StomachProblem2.jpg')}
          style={styles.imageSP2}></Image>

          <Text>To Do This:</Text>
          <Text>1. Sit with your legs outstretched in front of you in Staff Pose / Dandasana.</Text>
          <Text>2. Lift your right leg and place your right foot on the outside of your left knee. Bend your left leg and place the left foot on the outside of your right hip.</Text>
          <Text>3. As you inhale, press your sitting bones down and lengthen your spine. Place your right arm behind you, extend your left arm up. As you exhale, twist your body to the right, hugging your knee with your left arm, or hooking your elbow behind your left knee.</Text>
          <Text>4. 
Keep lengthening your spine on the in-breath and twisting from the belly on the out-breath.
Find ease and your appropriate edge in that pose by moving in and out with barely noticeable pulses. Allow your hips to follow the movement of the spine to some degree.</Text>
          <Text>Stay for 5 to 8 breaths.</Text>
          <Text>6. To come out of the pose, come out of the twist as you exhale and move back into Dandasana. Repeat on the other side.</Text>

          <Text>SUPTA MATSYENDRASANA (SUPINE SPINAL TWIST)</Text>

          <Image
          source={require('./StomachProblem3.jpg')}
          style={styles.imageSP3}></Image>

          <Text>To Do This</Text>
          <Text>1. Lying on your back, bring your arms out to the sides with the palms facing down in a T position. Bend the right knee and place the right foot on the left knee.</Text>
          <Text>2. Exhale drop the right knee over to the left side of your body, twisting the spine and low back. Look at the right finger tips</Text>
          <Text>3. Keep the shoulders flat to the floor, close the eyes, and relax into the posture. Let gravity pull the knee down, so you do not have to use any effort in this posture.</Text>
          <Text>4. Breathe and hold for 6-10 breaths.</Text>
          <Text>5. To release: inhale and roll the hips back to the floor, and exhale the leg back down to the floor.</Text>
          <Text>6. Do it on the other side</Text>

          <Text>APANASANA (KNEES TO CHEST POSE)</Text>

          <Image
          source={require('./StomachProblem4.jpg')}
          style={styles.imageSP4}></Image>

          <Text>To Do This</Text>
          <Text>1. Lie down on your back and pull both knees up to your chest.</Text>
          <Text>2. Slowly pull the knees toward the shoulders until you feel the stretch in your lower back.</Text>
          <Text>3. Stay in knees to chest pose for 30 seconds to 1 minute</Text>
        
        <TouchableOpacity
          style={styles.buttonSP}
          onPress={() => {
            this.Asana();
          }}>
          <Text style={styles.buttonTextSP}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textSP: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: 'green',
    marginTop: 20,
  },
  buttonSP: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
  buttonTextSP: {
    textAlign: 'center',
    color: 'white',
  },
  imageSP1: {
    width: 250,
    height: 200,
  },
  imageSP2: {
    width: 250,
    height: 200,
  },
  imageSP3: {
    width: 250,
    height: 200,
  },
  imageSP4: {
    width: 250,
    height: 200,
  }
});
