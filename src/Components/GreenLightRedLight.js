import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button,Dimensions} from 'react-native';
const{height,width}=Dimensions.get('screen');
const GreenLightRedLight = ({difficultyLevel}) => {
  // Determine the required number of clicks based on difficulty level
  let requiredClicks;
  if (difficultyLevel === 'Easy') {
    requiredClicks = 10;
  } else if (difficultyLevel === 'Medium') {
    requiredClicks = 15;
  } else if (difficultyLevel === 'Hard') {
    requiredClicks = 25;
  }
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGreen, setIsGreen] = useState(false); // Initialize as false to start with red
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(40);
  let intervalId; // Store interval ID
  const handleStartGame = () => {
    setIsGameStarted(true);
    startGameTimer();
  };
  const startGameTimer = () => {
    intervalId = setInterval(() => {
      setIsGreen(prevIsGreen => !prevIsGreen); // Toggle color every interval
    }, Math.floor(Math.random() * 2000) + 1000);

    // Clear interval when time is up
    setTimeout(() => {
      clearInterval(intervalId);
      handleGameOver();
    }, 10000);
  };
  const handleBoxClick = () => {
    if (isGreen) {
      setScore(prevScore => prevScore + 1); // Increment score when box is green
      if (score + 1 >= requiredClicks) {
        handleGameOver(); // Call handleGameOver with the updated score
      }
    } else {
      handleGameOver();
    }
  };
  

  const handleGameOver = () => {
    setIsGameStarted(false);
    clearInterval(intervalId);
    if (score >= requiredClicks) {
      alert(`You win! Score: ${score}`);
    } else {
      alert(`Game Over! Score: ${score}`);
    }
  };
  

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.box, isGreen ? styles.greenBox : styles.redBox]}
        onPress={isGameStarted ? handleBoxClick : null}
      />
      <Text style={[styles.NormlaText,{marginTop:20,color:"rgba(16, 16, 16, 1)"}]}>Your Score: {score}</Text>
      {!isGameStarted && (
        <TouchableOpacity  onPress={handleStartGame} style={styles.Touchable}>
            <Text style={styles.NormlaText}>Start Game</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:width,
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor:'rgba(255, 255, 255, 1)'
  },
  box: {
    width: width*0.5,
    height: height*0.25,
    marginTop:'20%',
    borderRadius:10
  },
  greenBox: {
    backgroundColor: 'green',
  },
  redBox: {
    backgroundColor: 'red',
  },
  Touchable:{
    width:'80%',
    height:'8%',
    backgroundColor:'rgba(93, 48, 112, 1)',
    borderRadius:50,
    alignItems:'center',
    position:'absolute',
    bottom:'10%',
    justifyContent:'center',
  },
  NormlaText:{
    fontSize:18,
    fontWeight:'600',
    color:'rgba(255, 255, 255, 1)'
  }
});

export default GreenLightRedLight;
