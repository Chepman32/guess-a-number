import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text, StatusBar } from 'react-native';
import * as Font from 'expo-font';

import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import AppLoading from 'expo-app-loading';
import { init } from './Localization';
import SplashScreen from './components/SplashScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Settings } from './Settings';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [text, setText] = useState("")
  const [guessRounds, setGuessRounds] = useState(0);
  const [rounds, setRounds] = useState(0)
  const [img, setImg] = useState()
  const [dataLoaded, setDataLoaded] = useState(false);
  init()
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = selectedNumber => {
    setRounds(0)
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <SafeAreaProvider>
    <SplashScreen onStartGame={startGameHandler} 
  setText={(value) => setText(value)}
  setImg={(value) => setImg(value)}
  back={() => {
    setUserNumber(0)
    setGuessRounds(false)
  }}
  />
  </SafeAreaProvider>

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} text={text}
       rounds={rounds} setRounds={(value) => setRounds(value)} back={() => {
         setUserNumber(0)
         setGuessRounds(false)
       }} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
      img={img}
        roundsNumber={rounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title={"Guess a Number"} />
      {content}
      <StatusBar hidden={true}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
