import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import icons from '@/constants/icons';

const TabIcon = ({ focused, title, icon }: {focused: boolean; 
    icon: any; title: string;
}) => {
    return (
        <View className='flex-1 mt-2 flex flex-col items-center'>
            <Image source={icon} tintColor={focused ? '#0061ff' : '#666876'} resizeMode='contain' className='size-7'/>
            <Text className={`text-primary-300 text-xs mt-1 ${focused ? 'text-blue-500 font-rubik-medium' : 'text-gray-500 font-rubik-medium'} 
            w-full text-center`}>{title}</Text>
        </View>
    );
}

const TabsLayout = () => {
    return (
        <Tabs 
            screenOptions={
                {
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: 'white',
                        borderTopColor: 'absolute',
                        borderTopWidth: 1,
                        minHeight: 60,
                    },
                }
            }
        >
            <Tabs.Screen name="sign-in" options={{
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} title="Connexion" icon={icons.rightArrow} />
                ),
            }}  
            /> 

            <Tabs.Screen name="index" options={{
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} title="Home" icon={icons.home} />
                ),
            }}  
            />

            <Tabs.Screen name="explore" options={{
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} title="Explore" icon={icons.search} />
                ),
            }}
            />

            <Tabs.Screen name="profile" options={{
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} title="Profile" icon={icons.person} />
                ),
            }}
            /> 
            
        </Tabs>
        
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