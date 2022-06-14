import React, { useState, useEffect } from "react"
import { ScrollView, View, TouchableOpacity, Text, Image, StyleSheet } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import { Constants } from "./constants/constants"
import { LanguageItem } from "./LanguageItem"
import { init } from "./Localization"
export const Settings = ({hide}) => {
    const [lang, setLang] = useState("")
    useEffect(() => {
        readData()
    }, [lang])
    init()

    const saveData = async (value) => {
        
        try {
            AsyncStorage.setItem("ACTIVE_LANGUAGE", value)
        } catch (e) {
        alert('Failed to save the data to the storage')
        }
    }

    const readData = async () => {
        try {
        const value = await AsyncStorage.getItem("ACTIVE_LANGUAGE");
        setLang(value)
        if (value !== null) {
            setLang(value);
        }
        } catch (e) {
        alert('Failed to fetch the input from storage');
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("impactLight", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>impactLight</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("impactMedium", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>impactMedium</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("impactHeavy", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>impactHeavy</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("rigid", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>rigid</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("soft", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>soft</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("notificationSuccess", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>notificationSuccess</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("notificationWarning", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>notificationWarning</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("notificationError", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>notificationError</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("selection", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>selection</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("clockTick", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>clockTick</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("contextClick", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>contextClick</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("keyboardPress", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>keyboardPress</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("keyboardRelease", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>keyboardRelease</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("keyboardTap", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>keyboardTap</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("longPress", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>longPress</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("textHandleMove", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>textHandleMove</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("virtualKey", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>virtualKey</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("virtualKeyRelease", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>virtualKeyRelease</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("effectClick", Constants.hapticOptions)} style={{marginTop: 50}} >
                    <Text>effectClick</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("effectDoubleClick", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>effectDoubleClick</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("effectHeavyClick", Constants.hapticOptions)} style={{marginTop: 20}} >
                    <Text>effectHeavyClick</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ReactNativeHapticFeedback.trigger("effectTick", Constants.hapticOptions)} >
                    <Text>effectTick</Text>
                </TouchableOpacity>
            <LanguageItem icon={require("./assets/icons/ru.png")} name={"RU"} active={lang === "ru-RU"} handler={() => {
                saveData("ru-RU")
                saveData("ru-RU")
                setLang("ru-RU")
            }} />
            <LanguageItem icon={require("./assets/icons/us.png")} name={"EN"} active={lang === "en-US"} handler={() => {
                saveData("en-US")
                saveData("en-US")
                setLang("en-US")
            }} />
            <LanguageItem icon={require("./assets/icons/es.png")} name={"ES"} active={lang === "es-US"} handler={() => {
                saveData("es-US")
                saveData("es-US")
                setLang("es-US")
            }} />
            <LanguageItem icon={require("./assets/icons/ch.png")} name={"CH"} active={lang === "ch-CM"} handler={() => {
                saveData("ch-CM")
                saveData("ch-CM")
                setLang("ch-CM")
            }} />
            <LanguageItem icon={require("./assets/icons/de.png")} name={"DE"} active={lang === "de-DE"} handler={() => {
                saveData("de-DE")
                saveData("de-DE")
                setLang("de-DE")
            }} />
            <LanguageItem icon={require("./assets/icons/fr.png")} name={"FR"} active={lang === "fr-FR"} handler={() => {
                saveData("fr-FR")
                saveData("fr-FR")
                setLang("fr-FR")
            }} />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    },
    back: {
        width: Constants.MAX_WIDTH * 0.25,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 100,
    },
    backIcon: {
        width: Constants.MAX_WIDTH * 0.15,
        height: Constants.MAX_WIDTH * 0.15,
        margin: Constants.MAX_WIDTH * 0.05,
    }
})