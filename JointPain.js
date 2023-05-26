import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class JointPain extends React.Component {
  Asana() {
    this.props.navigation.navigate('Asana');
  }
  render() {
    return (
      <View>
        <Text style={styles.textJP}>Joint Pain</Text>

         <Text>SETU BANDHASANA (BRIDGE POSE)</Text>

        <Image
          source={require('./JointPain1.jfif')}
          style={styles.imageJP1}></Image>
       
        <Text>To Do This:</Text>
        <Text>1. Lying on your back, bend both knees and place the feet flat on the floor hip width apart. Slide the arms alongside the body with the palms facing down. The fingertips should be lightly touching the heels.</Text>
        <Text>2. Press the feet into the floor, inhale and lift the hips up, rolling the spine off the floor. Lightly squeeze the knees together to keep the knees hip width apart.</Text>
        <Text>3. Press down into the arms and shoulders to lift the chest up. Engage the legs, buttocks and mula bandha to lift the hips higher.</Text>
        <Text>4. Breathe and hold for 4-8 breaths.</Text>
        <Text>5. To release: exhale and slowly roll the spine back to the floor.</Text>

<Text>WARRIOR POSE (VIRABHADRASANA - I)</Text>

        <Image
          source={require('./JointPain2.jpg')}
          style={styles.imageJP2}></Image>

        <Text>To Do This</Text>
        <Text>1. engage the legs to ground down through the feet, and inhale the hands up to the bent knee. Use the arms to draw the torso back slightly. Make sure the right knee is directly over the right ankle.
</Text>
        <Text>2. Bring the hands to the hips and square the hips and the shoulders to the front wall. Relax the shoulders down and draw the shoulderblades towards the spine to open the chest.
        </Text>
        <Text>3. Inhale the arms over the head in a H position with the palms facing each other, or bring the palms together crossing the thumbs, or interlace the fingers together and point the index finger up. Keep the shoulders relaxed and the chest lifted.</Text>
        <Text>4. To go deeper, bring the palms together and carefully arch back and look up towards the ceiling.</Text>
        <Text>5. Inhale deeply into the belly and chest, exhale press into the feet, fingers and crown, feeling your body expanding out in 5 directions.</Text>

        <TouchableOpacity
          style={styles.buttonJP}
          onPress={() => {
            this.Asana();
          }}>
          <Text style={styles.buttonTextJP}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textJP: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: 'pink',
    marginTop: 20,
  },
  buttonJP: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
  buttonTextJP: {
    textAlign: 'center',
    color: 'white',
  },
  imageJP1: {
    width: 250,
    height: 200,
  },
  imageJP2:{
  width:250,
  height:250
  }
});
