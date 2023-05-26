import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class BackPain extends React.Component {
  Asana() {
    this.props.navigation.navigate('Asana');
  }
  render() {
    return (
      <View>
        <Text style={styles.textBP}>Back Pain</Text>
        
        <Text> CAT COW POSE </Text>

        <Image
          source={require('./BackPain1.jpg')}
          style={styles.imageBP}></Image>
          
        <Text>To do this:</Text>
        <Text>1. Get on all fours.</Text>
        <Text>
          2. Place your wrists underneath your shoulders and your knees
          underneath your hips.
        </Text>
        <Text>3. Balance your weight evenly between all four points.</Text>
        <Text>
          4. Inhale as you look up and let your stomach drop down toward the
          mat.
        </Text>
        <Text>
          5. Exhale as you tuck your chin into your chest, draw your navel
          toward your spine, and arch your spine toward the ceiling.
        </Text>
        <Text>6. Maintain awareness of your body as you do this movement.</Text>
        <Text>7. Focus on noting and releasing tension in your body.</Text>
        <Text>8. Continue this fluid movement for at least 1 minute.</Text>

        <Text> COBRA POSE </Text>

        <Image
          source={require('./BackPain2.jfif')}
          style={styles.imageBP}></Image>

        <Text>To do this:</Text>
        <Text>1. Lie on your stomach with your hands under your shoulders and your fingers facing forward.</Text>
        <Text>2. Draw your arms in tightly to your chest. Don’t allow your elbows to go out to the side.</Text>
        <Text>3. Press into your hands to slowly lift your head, chest, and shoulders.</Text>
        <Text>4. You can lift partway, halfway, or all the way up.
Maintain a slight bend in your elbows.</Text>
        <Text>5. You can let your head drop back to deepen the pose.</Text>
        <Text>6. Release back down to your mat on an exhale.
Bring your arms by your side and rest your head.</Text>
        <Text>7. Slowly move your hips from side to side to release tension from your lower back.</Text>

        <Image
          source={require('./BackPain3.webp')}
          style={styles.imageBP}></Image>

          <Text>EXTENDED TRIANGLE</Text>

          <Text>To do this:</Text>
          <Text>1. From standing, walk your feet about 4 feet apart.</Text>
          <Text>2. Turn your right toes to face forward, and your left toes out at an angle.</Text>
          <Text>3. Lift your arms parallel to the floor with your palms facing down.</Text>
          <Text>4. Tilt forward and hinge at your right hip to come forward with your arm and torso.</Text>
          <Text>5. Bring your hand to your leg, a yoga block, or onto the floor.</Text>
          <Text>6. Extend your left arm up toward the ceiling.</Text>
          <Text>7. Look up, forward, or down.Hold this pose for up to 1 minute.</Text>
          <Text>8. Repeat on the opposite side.</Text>

        <TouchableOpacity
          style={styles.buttonBP}
          onPress={() => {
            this.Asana();
          }}>
          <Text style={styles.buttonTextBP}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textBP: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: 'red',
    marginTop: 20,
  },
  buttonBP: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
  buttonTextBP: {
    textAlign: 'center',
    color: 'white',
  },
  imageBP: {
    width: 300,
    height: 200,
  },
});
