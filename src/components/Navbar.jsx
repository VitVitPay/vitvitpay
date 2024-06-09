import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Blank from '../components/Blank'
import { Welcome } from '../welcome/welcome'

const Tab = createBottomTabNavigator();

function HomeNavBar({}){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Welcome}/>
            <Tab.Screen name="Wallet" component={Blank}/>
            <Tab.Screen name="Send" component={Blank}/>
            <Tab.Screen name="Balance" component={Blank}/>
            <Tab.Screen name="Profile" component={Blank}/>
        </Tab.Navigator>
    )
}

module.exports = {
    HomeNavBar,
}