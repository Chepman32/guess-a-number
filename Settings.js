import React, { useState, useEffect } from "react"
import { ScrollView, View, TouchableOpacity, Text, Image, StyleSheet } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'
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
        <ScrollView style={{flexDirection: "row"}} >
            <TouchableOpacity onPress={hide} style={styles.back}>
            <Image source={require("./assets/icons/back.png")} style={styles.backIcon} />
            </TouchableOpacity>
            <View style={styles.container}>
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
    justifyContent: "center",
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