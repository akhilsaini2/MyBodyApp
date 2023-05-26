import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class Contact extends React.Component {

Back1() {
    this.props.navigation.navigate('HomeScreen');
  }

  render() {
    return (
      <View>
        <Text>
          For Queries and Assistance contact at- akhilsaini08.akgmail.com
        </Text>

         <TouchableOpacity
          style={styles.backC}
          onPress={() => {
            this.Back1();
          }}>
          <Text style={styles.backtextC}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
backC: {
justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 50,
    height: 50,
    backgroundColor: 'black'
},
backtextC:{
textAlign: 'center',
    color: 'white',
}

})

