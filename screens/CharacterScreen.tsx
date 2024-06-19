import React from 'react';
import { View, Text } from 'react-native';

const CharacterScreen = ({ route }) => {
    const { characterId } = route.params;

    return (
        <View>
            <Text>Character Screen: {characterId}</Text>
        </View>
    );
};

export default CharacterScreen;
