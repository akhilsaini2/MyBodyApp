import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class FoodHabit extends React.Component {
  Back1() {
    this.props.navigation.navigate('HomeScreen');
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Food Habits</Text>

        <Image source={require('./FH1.jpg')} style={styles.ifh}></Image>
        
        <Text style={styles.textFH1}>Health Benefits of a Balanced Diet: </Text>
        <Text>
          -Healthy eating increases energy, improves the way your body
          functions, strengthens your immune system and prevents weight gain.
        </Text>
        <Text>The other major benefits are:</Text>
        <Text>
          -Meets your nutritional need. A varied, balanced diet provides the
          nutrients you need to avoid nutritional deficiencies.
        </Text>
        <Text>
          -Prevent and treat certain diseases. Healthful eating can prevent the
          risk of developing certain diseases such as diabetes, cancer and heart
          disease. It is also helpful in treating diabetes and high blood
          pressure.
        </Text>
        <Text>
          -Following a special diet can reduce symptoms, and may help you better
          manage an illness or condition.
        </Text>
        <Text>
          -Feel energetic and manage your weight. A healthy diet will assist you
          to feel higher, provide you with more energy, and help you fight
          stress.
        </Text>
        <Text>
          -Food is the mainstay of many social and cultural events. Apart from
          nutrition properties, it helps facilitate connections between
          individuals.
        </Text>
        <Text style={styles.textFH2}>
          General Guidelines for Healthy Eating:{' '}
        </Text>
        <Text>
          -The most important rule of healthy eating is not skipping any meal.
          Skipping meals lowers your metabolic rate. Normal eating includes 3
          major meals and 2 snacks between meals. Also, Never skip breakfast. It
          is the foremost vital meal of the day.
        </Text>
        <Text>
          -Learn simple ways to prepare food. Healthy eating doesn’t have to
          mean complicated eating. Keep meal preparation easy, eat more raw
          foods such as salads, fruits and vegetable juices, and focus on the
          pleasure of eating healthy food rather than the calories.
        </Text>
        <Text>
          -It is important to stop when you feel full. This will help you
          maintain your weight to an extent. This also will help you remain
          alert and feeling your best.
        </Text>
        <Text>
          -Drink lots of water. Keep a bottle of water near you while working,
          watching TV, etc.
        </Text>
        <Text>
          -Variety of foods should be used in the menu. No single food has all
          the nutrients.
        </Text>
        <Text>
          -To improve the cereal and pulse protein quality, a minimum ratio of
          cereal protein to pulse protein should be 4:1. In terms of the grains,
          it will be eight parts of cereals and one part of pulses.
        </Text>
        <Text>-Eat five portions of fruit and vegetables every day.</Text>
        <Text>
          -Keep a supply of healthy snacks to hand. This will stop you from
          eating an unhealthy snack when hungry.
        </Text>
        <Text>
          -Remove all visible fat from food before you cook it – take the skin
          off chicken and trim the white fat off any meat.
        </Text>
        <Text>
          -Limit stimulants such as caffeine, alcohol and refined sugar.
        </Text>
        <Text>
          -Limit the number of times you eat out to once a week. Take your own
          packed lunch to work.
        </Text>
        <Text>
          Only eat things you like the taste of – find what works for you and
          don’t force yourself to eat things just because they’re good for you.
        </Text>

        <TouchableOpacity
          style={styles.button17}
          onPress={() => {
            this.Back1();
          }}>
          <Text style={styles.buttonText17}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    color: 'lime',
    fontSize: 30,
  },
  button17: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 4,
    borderRadius: 15,
    marginTop: 20,
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
  buttonText17: {
    textAlign: 'center',
    color: 'white',
  },
  ifh: {
    width: 330,
    height: 250,
  },
  textFH1: {
    justifyContent: 'center',
    alignSelf: 'left',
    marginTop: 20,
    color: 'Black',
    fontSize: 20,
  },
  textFH2: {
    justifyContent: 'center',
    alignSelf: 'left',
    marginTop: 20,
    color: 'black',
    fontSize: 20,
  },
});
