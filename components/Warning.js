import React, { useEffect } from "react"
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native"
import Modal from "react-native-modal";
import { Constants } from "../constants/constants"
import { IMLocalized, init } from "../Localization"

export const Warning = ({ text, handler }) => {
    init()
    useEffect(() => {
        init()
    })
    init()
    return (
        <Modal isVisible={true} onBackdropPress={handler} >
        <View style={styles.container}>
            <View style={styles.top}>
            <Image source={require("../assets/icons/warning.png")} style={styles.icon}/>
            </View>
            <View style={styles.bottom}>
            <Text style={styles.text}>{IMLocalized("You know that this is wrong")} </Text>
            <TouchableOpacity onPress={handler} style={styles.button} >
                <Text style={styles.buttonText} >OK</Text>
            </TouchableOpacity>
            </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Constants.MAX_WIDTH * 0.9,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        overflow: "hidden",
        borderRadius: Constants.MAX_HEIGHT * 0.015,
        shadowColor: "#000000",
    },
    top: {
        width: "100%",
        paddingTop: Constants.MAX_HEIGHT * 0.08,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0394fc"
    },
    bottom: {
        paddingTop: Constants.MAX_HEIGHT * 0.07,
        paddingBottom: Constants.MAX_HEIGHT * 0.2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    icon: {
        width: Constants.MAX_HEIGHT * 0.15,
        height: Constants.MAX_HEIGHT * 0.15,
        marginBottom: Constants.MAX_HEIGHT * 0.08,
    },
    text: {
        fontSize: Constants.MAX_HEIGHT * 0.025,
        fontWeight: "600",
        color: "#000",
    },
    button: {
        minWidth: "70%",
        marginTop: Constants.MAX_HEIGHT * 0.07,
        paddingVertical: Constants.MAX_WIDTH * 0.05,
        paddingHorizontal: Constants.MAX_WIDTH * 0.1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fc033d",
        overflow: "hidden",
        borderRadius: Constants.MAX_HEIGHT * 0.065,
        color: "#fff"
    },
    buttonText: {
        fontSize: Constants.MAX_HEIGHT * 0.06,
        fontWeight: "600",
        color: "#FFF"
    },
})