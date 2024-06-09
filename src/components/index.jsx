import { StyleSheet } from "react-native";

const formButtonStyle = StyleSheet.create({
    darkPurpleButton: {
        backgroundColor: "#4F46CC",
        padding: 16,
        borderRadius: 30,
        marginVertical: 10,
        width: "40%",
    },
    fadedPurpleButton: {
        backgroundColor: "#7D83F4",
        padding: 16,
        borderRadius: 30,
        marginVertical: 10,
        width: "40%",
    },
    darkPurpleButtonText: {
        fontSize: 25,
        fontStyle: "normal",
        fontWeight: "600",
        color: "#E7E8FE",
        textAlign: "center",
    },
    fadedPurpleButtonText: {
        fontSize: 25,
        fontStyle: "normal",
        fontWeight: "600",
        color: "#E7E8FE",
        textAlign: "center",
    },
})

module.exports = {
    formButtonStyle,
}