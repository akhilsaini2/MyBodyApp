import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class NeckPain extends React.Component {
  Asana() {
    this.props.navigation.navigate('Asana');
  }
  render() {
    return (
      <View>
        <Text style={styles.textNP}>Neck Pain</Text>

        <Text>Boat Pose (Navasana)</Text>

        <Image
          source={require('./NeckPain1.jfif')}
          style={styles.imageNP1}></Image>

        <Text>To Do This:</Text>
        <Text>1. Sit with your knees bent, feet on the floor. Place your hands behind your knees, lift the chest, engaging the back muscles as you inhale</Text>
        <Text>2. Engage your inner thighs and draw your lower belly in and up</Text>
        <Text>3. Tip back on the back of your sitting bones and lift your feet up to about knee height, toes spread out</Text>
        <Text>4. Bring your arms parallel to the floor To go further, straighten your 
        legs</Text>
        <Text>5. Stay for 2-5 breaths, work up to 10 breaths</Text>
        <Text>6. To come out of the pose, on an exhalation bring your feet down, and sit with a straight spine, holding on to your legs for a couple of breaths</Text>

        <Text>SIDE PLANK POSE (VASISTHASANA)</Text>

          <Image
          source={require('./NeckPain2.jpg')}
          style={styles.imageNP2}></Image>

        <Text>To Do This:</Text>
        <Text>1. Start in Plank Pose, pressing firmly through your hands with your shoulders aligned over your wrists.</Text>
        <Text>2. Keeping your core muscles and legs engaged, roll both your heels to the right.</Text>
        <Text>3. Stack your left foot on top of the right.
Draw your legs together and push out through the feet.</Text>
        <Text>4. 
Press down through the right hand and raise your left hand. Keep your lower belly engaged and your tailbone long.</Text>
        <Text>5. Look up to your hand, or ahead of you. 
Build up to stay in the pose for 5 breaths.</Text>
        <Text>6. To come out, exhale as you lower your left hand and pivot your feet back to Plank position. Repeat on the other side.</Text>

        <Text>CORPSE POSE (SAVASANA)</Text>

          <Image
          source={require('./NeckPain3.jpg')}
          style={styles.imageNP3}></Image>

        <Text>To Do This:</Text>
        <Text>1. Lying on your back, let the arms and legs drop open, with the arms about 45 degrees from the side of your body. Make sure you are warm and comfortable, if you need to place blankets under or over your body.</Text>
        <Text>2. Close the eyes, and take slow deep breaths through the nose. Allow your whole body to become soft and heavy, letting it relax into the floor. As the body relaxes, feel the whole body rising and falling with each breath.</Text>
        <Text>3. Scan the body from the toes to the fingers to the crown of the head, looking for tension, tightness and contracted muscles. Consciously release and relax any areas that you find. If you need to, rock or wiggle parts of your body from side to side to encourage further release.</Text>
        <Text>4. Release all control of the breath, the mind, and the body. Let your body move deeper and deeper into a state of total relaxation.</Text>
        <Text>5. Stay in Shavasana for 5 to 15 minutes.</Text>

        <TouchableOpacity
          style={styles.buttonNP}
          onPress={() => {
            this.Asana();
          }}>
          <Text style={styles.buttonTextNP}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textNP: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: 'blue',
    marginTop: 20,
  },
  buttonNP: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
  buttonTextNP: {
    textAlign: 'center',
    color: 'white',
  },
  imageNP1: {
    width: 250,
    height: 200,
  },
  imageNP2: {
    width: 250,
    height: 200,
  },
  imageNP3: {
    width: 250,
    height: 200,
  }
});
