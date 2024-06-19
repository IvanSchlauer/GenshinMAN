import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CharacterArchiveScreen from './screens/CharacterArchiveScreen';
import TeamManageScreen from './screens/TeamManageScreen';
import MarketScreen from './screens/MarketScreen';
import CharacterScreen from './screens/CharacterScreen';
import {Image} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const archiveUri = 'https://static.wikia.nocookie.net/gensin-impact/images/8/89/Icon_Character_Archive.png/revision/latest/thumbnail/width/360/height/360?cb=20230427001909'

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="TeamManage" component={TeamManageScreen} />
            <Stack.Screen name="Character" component={CharacterScreen} />

        </Stack.Navigator>
    );
}

const HomeTabIcon = ({ color, size }) => (
    <FontAwesome5 name="home" size={size} color={color} />
);

const ArchiveTabIcon = () => (
    <Image
        source={{ uri: archiveUri }}
        style={{ width: 26, height: 26 }}
    />
);

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="HomeStack" component={HomeStack}
                            options={{ title: 'Home', tabBarIcon: HomeTabIcon }} />
                <Tab.Screen name="Archive" component={CharacterArchiveScreen}
                            options={{ title: 'Archive', tabBarIcon: ArchiveTabIcon}}/>
                <Tab.Screen name="Market" component={MarketScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
