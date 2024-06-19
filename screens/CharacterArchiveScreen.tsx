import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const characters = [
    { id: '1', name: 'Bennet', image: 'https://tiermaker.com/images/chart/chart/genshin-impact-male-characters-799560/pic5png.png' },
    { id: '2', name: 'Bennet', image: 'https://tiermaker.com/images/chart/chart/genshin-impact-male-characters-799560/pic5png.png' },
    { id: '3', name: 'Bennet', image: 'https://tiermaker.com/images/chart/chart/genshin-impact-male-characters-799560/pic5png.png' },
    { id: '4', name: 'Bennet', image: 'https://tiermaker.com/images/chart/chart/genshin-impact-male-characters-799560/pic5png.png' },
    { id: '5', name: 'Bennet', image: 'https://tiermaker.com/images/chart/chart/genshin-impact-male-characters-799560/pic5png.png' },
    { id: '6', name: 'Bennet', image: 'https://tiermaker.com/images/chart/chart/genshin-impact-male-characters-799560/pic5png.png' },
    { id: '6', name: 'Bennet', image: 'https://tiermaker.com/images/chart/chart/genshin-impact-male-characters-799560/pic5png.png' },
    { id: '6', name: 'Bennet', image: 'https://tiermaker.com/images/chart/chart/genshin-impact-male-characters-799560/pic5png.png' },
    { id: '6', name: 'Bennet', image: 'https://tiermaker.com/images/chart/chart/genshin-impact-male-characters-799560/pic5png.png' },
    { id: '6', name: 'Bennet', image: 'https://tiermaker.com/images/chart/chart/genshin-impact-male-characters-799560/pic5png.png' },
];

const numColumns = 5;
const { width } = Dimensions.get('window');
const itemSize = width / numColumns;

const CharacterArchiveScreen = () => {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={characters}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={numColumns}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: {
        width: itemSize,
        alignItems: 'center',
        marginVertical: 10,
    },
    image: {
        width: itemSize * 0.8,
        height: itemSize * 0.8,
        borderRadius: 5,
        backgroundColor: '#303965', // Example background color
        padding: 5,
    },
    text: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 12,
        color: '#000',
    },
});

export default CharacterArchiveScreen;
