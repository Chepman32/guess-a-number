import React from "react"
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native"
import { Constants } from "./constants/constants"

export const LanguageItem = ({icon, name, handler, active}) => {
    return (
        <TouchableOpacity onPress={handler} activeOpacity={1} >
            <View style={styles.container}>
                <Image source={icon} style={active ? styles.activeIcon : styles.icon}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Constants.MAX_WIDTH * 0.9,
        marginVertical: Constants.MAX_HEIGHT * 0.02,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: Constants.MAX_WIDTH * 0.15,
        height: Constants.MAX_WIDTH * 0.15,
    },
    activeIcon: {
        width: Constants.MAX_WIDTH * 0.15,
        height: Constants.MAX_WIDTH * 0.15,
        borderWidth: Constants.MAX_WIDTH * 0.01,
        borderColor: "#fc033d",
        borderRadius: Constants.MAX_HEIGHT * 0.05,
    },
    name: {
        marginTop: Constants.MAX_HEIGHT * 0.03,
        fontSize: Constants.MAX_WIDTH * 0.06,
        fontWeight: "500",
    }
})