import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ListItem from "../components/ListItem";
import {teams} from "../assets/mockteams";

const HomeScreen = ({ navigation }) => {
    const handlePress = (item) => {
        navigation.navigate('TeamManage', { teamId: item.id });
    };

    const renderItem = ({ item }) => (
        <ListItem item={item} onPress={handlePress} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={teams}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    teamContainer: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    imageContainer: {
        backgroundColor: '#7C62AB',
        padding: 5,
        borderRadius: 5,
        marginLeft: 5,
    },
    image: {
        width: 50,
        height: 50,
    },
    teamName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
