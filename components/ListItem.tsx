import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = ({ item, onPress }) => (
    <TouchableOpacity onPress={() => onPress(item)}>
        <View style={styles.teamContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.teamName}>{item.name}</Text>
                <Text>{item.elements.join(', ')}</Text>
            </View>
            <View style={styles.imageRow}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.preview }} style={styles.image} />
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.preview }} style={styles.image} />
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.preview }} style={styles.image} />
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.preview }} style={styles.image} />
                </View>
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
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
        backgroundColor: '#303965',
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

export default ListItem;
