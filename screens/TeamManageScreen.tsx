import React from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import ListItem from "../components/ListItem";

const teams = [
    { id: '1', name: 'Bennet Mono Pyro', elements: ['Pyro', 'Hydro'], preview: 'https://tiermaker.com/images/chart/chart/genshin-impact-male-characters-799560/pic5png.png' },
    { id: '2', name: 'Team 2', elements: ['Electro', 'Cryo'], preview: 'https://tiermaker.com/images/chart/chart/genshin-impact-male-characters-799560/pic5png.png' },
];

const TeamManageScreen = ({ route, navigation }) => {
    const { teamId } = route.params;

    const handlePress = (item) => {
        navigation.navigate('TeamManage', { teamId: item.id });
    };

    const renderItem = ({ item }) => (
        <ListItem item={item} onPress={handlePress} />
    );

    return (
        <View>
            <Text style={styles.teamName}>Manage Team: {teamId}</Text>
            <View style={styles.container}>
                <FlatList
                    data={teams}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <Button title="Add Character" onPress={() => {}} />
            <Button title="Remove Character" onPress={() => {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    teamName: {
        fontSize: 28,
        fontWeight: "bold",
        margin: "auto"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default TeamManageScreen;
