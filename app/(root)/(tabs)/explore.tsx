import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from "expo-router";

const Explore = () => {
    return (
        <View style={styles.container}>
            <Text>Explore Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Explore;