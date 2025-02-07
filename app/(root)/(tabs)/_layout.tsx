import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TabsLayout = () => {
    return (
        <Tabs 
            screenOptions={
                {
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: 'white',
                        borderTopColor: 'absolute',
                        borderTopWidth: 1,
                    },
                }
            }
        />
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TabsLayout;