import * as React from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity,SafeAreaView} from 'react-native';

export default class Acupressure extends React.Component {

  Back1() {
    this.props.navigation.navigate('HomeScreen');
  }
  render() {
    return (
      <View>
          <Text style={styles.text4}>Acupressures</Text>
          <Image
        source={require('./Acupressure.png')}
        style={styles.bg2}></Image>
       <TouchableOpacity
          style={styles.back2}
          onPress={() => {
            this.Back1();
          }}>
          <Text style={styles.Backtext2}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
text4:{
    textAlign: 'center',
    fontSize: 30,
    color: 'pink'
},
bg2:{
  width: 330,
  height: 170,

},
back2:{
justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 50,
    height: 50,
    backgroundColor: 'black'
},
Backtext2:{
textAlign: 'center',
    color: 'white',
}

})