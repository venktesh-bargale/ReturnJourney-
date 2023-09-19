import React from 'react';
import { View, Text, StyleSheet,Dimensions} from 'react-native';
import GreenLightRedLight from '../Components/GreenLightRedLight'; // Import the game component
const{height,width}=Dimensions.get('screen');
const GameScreen = ({ route }) => {
  const { difficultyLevel } = route.params;

  return (
    <View style={styles.Container}>
      <Text style={styles.Heading}>Difficulty level: {difficultyLevel}</Text>
      <GreenLightRedLight difficultyLevel={difficultyLevel} />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
    Container:{
        height:height,
        width:width,  
        flexDirection:'column',
        backgroundColor:'rgba(255, 255, 255, 1)'
    },
    Heading:{
        marginTop:'10%',
        fontSize:20,
        alignSelf:'center',
        marginBottom:20,
        fontWeight:'700',
        color:'rgba(93, 48, 112, 1)'
    }
})
