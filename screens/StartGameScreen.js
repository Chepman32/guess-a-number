import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import CyberButton from 'react-native-cyberpunk-button';

import Card from '../components/Card';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import { data } from '../constants/data';
import { Constants } from '../constants/constants';
import { IMLocalized, init } from '../Localization';
import { Settings } from '../Settings';

const StartGameScreen = props => {
  init()
  const [currentQuestion, setCurrentQuestion] = useState()
  const [options, setOptions] = useState(false)
  const [confirmed, setConfirmed] = useState(true);
  const [, setButtonWidth ] = useState(Dimensions.get('window').width / 4);

  useEffect(() => {
    props.setText(currentQuestion ? IMLocalized(currentQuestion.question) : "")
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

  useEffect(()=> {
    init()
  })

  const btnRef = useRef();

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>

        <MainButton onPress={() => props.onStartGame(currentQuestion ? currentQuestion.answer : "")}>
          {
            IMLocalized("START GAME")
          }
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

  return options
  ?
  <Settings back={() => setOptions(false)} />
  : (
    <ScrollView bounces={false} >
      <View>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <TitleText style={styles.title}>{IMLocalized("Start a New Game!")} </TitleText>
            <TouchableOpacity onPress={() => {
              setTimeout(() => {
                props.onStartGame(currentQuestion ? currentQuestion.answer : "")
              }, 1000)
              btnRef.current.animate()
            }}
            glitchDuration={1000}
            >
          <CyberButton
            ref={btnRef}
            disableAutoAnimation
            label={IMLocalized("START GAME")}
          />
        </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <TouchableOpacity onPress={() => setOptions(true)} style={styles.settings} >
      <Image source={require("../assets/settings-icon.png")} style={styles.settingsIcon}/>
      </TouchableOpacity>
    </View>
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
  },
  settings: {
    position: "absolute",
    top: "3%",
    left: "5%",
  },
  settingsIcon: {
    width: 64,
    height: 64,
  }
});

export default StartGameScreen;
