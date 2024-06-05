import { Button, TextInput, Image, ImageBackground } from "react-native";

export function Signup() {

    return (
        <View>
            <TextInput aria-label="Username"></TextInput>
            <TextInput aria-label="Password" textContentType='newPassword'></TextInput>
            <TextInput aria-label="Email" textContentType='emailAddress'></TextInput>
            <TextInput aria-label="Phone Number" textContentType='telephoneNumber'></TextInput>
        </View>
    )
}