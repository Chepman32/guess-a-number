import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

import Card from '../components/Card';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import { data } from '../constants/data';
import { Constants } from '../constants/constants';

const StartGameScreen = props => {
  const [currentQuestion, setCurrentQuestion] = useState()
  const [enteredValue, setEnteredValue] = useState(currentQuestion ? currentQuestion.answer : "");
  const [confirmed, setConfirmed] = useState(true);
  const [, setSelectedNumber] = useState(currentQuestion ? currentQuestion.answer : "");
  const [, setButtonWidth ] = useState(Dimensions.get('window').width / 4);

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  useEffect(() => {
    props.setText(currentQuestion ? currentQuestion.question : "")
    props.setImg(currentQuestion ? currentQuestion.img : "")
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 4);
    };
  
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  useEffect(() => {
    setCurrentQuestion(data[generateRandomBetween(data.length, 0)])
    props.onStartGame(currentQuestion ? currentQuestion.answer : "")
  }, [])


  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>

        <MainButton onPress={() => props.onStartGame(currentQuestion ? currentQuestion.answer : "")}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  const generateRandomBetween = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    return rndNum
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <TitleText style={styles.title}>Start a New Game!</TitleText>

            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: "40%",
    alignItems: 'center',
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold'
  },
  inputContainer: {
    width: '80%',
    // maxWidth: '80%',
    maxWidth: '95%',
    minWidth: 300,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: Constants.MAX_WIDTH * 0.03,
  },
  // button: {
  //   width: Dimensions.get('window').width / 4
  // },
  input: {
    width: 50,
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});

export default StartGameScreen;
