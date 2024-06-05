import { Button, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export function Welcome(){

    return (
        <View style={{margin: 'auto'}}>
            <Link href='/signup'> Signup </Link>
            <Link href='/login'> Login </Link>
        </View>
    )
}