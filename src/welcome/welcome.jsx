import { Button, View, Text } from "react-native"

export function Welcome(){

    return (
        <View style={{margin: 'auto'}}>
            <Button title='signup'> 
                <Text> Signup </Text> 
            </Button>
            <Button title='login'> 
                <Text> Login </Text> 
            </Button>
        </View>
    )
}