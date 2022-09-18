import React, { useState, useEffect } from "react"
import { ScrollView, View, TouchableOpacity, Text, Image, StyleSheet } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LanguageItem } from "./LanguageItem"
import { init } from "./Localization"
export const Settings = ({back}) => {
    const [lang, setLang] = useState("")
    useEffect(() => {
        readData()
    }, [])
    
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
            <TouchableOpacity onPress={back} style={styles.home} >
        <Image source={require("./assets/icons/home.png")} style={styles.homeIcon}/>
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
    home: {
        
        margin: 5,
      },
      homeIcon: {
        width: 44,
        height: 44,
      },
})