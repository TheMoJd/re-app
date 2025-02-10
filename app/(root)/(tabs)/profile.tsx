import icons from '@/constants/icons';
import images from '@/constants/images';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Touchable, TouchableOpacity, ImageSourcePropType} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SettingsItemProps {
    title: string;
    icon: ImageSourcePropType;
    onPress?: () => void;
    showArrow?: boolean;
    textStyle?: string;
}

const SettingsItem = ({ title, icon, onPress, textStyle, showArrow = true }: SettingsItemProps) => {
    return (
        <TouchableOpacity onPress={onPress} className='flex-row justify-between items-center w-full py-5 border-b border-gray-200'>
        <View>
            <Image source={icon} className='size-7' />
            <Text className='text-lg font-rubik-bold mt-2'>{title}</Text>
        </View>
        </TouchableOpacity>
    );
}

const Profile = () => {
    return (
        <SafeAreaView className='w-full bg-white'>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerClassName='pb-32 px-7 h-full'>
                <View className='flex-row justify-between items-center'>
                    <Text className='text-xl font-rubik-bold'>Profile</Text>
                    <Image source={icons.bell} className='size-5' />
                </View>

                <View className='flex-row justify-center flex mt-5'>
                    <View className='flex-col items-center ml-5'>
                        <Image source={images.avatar} className='size-44 relative rounded-full' />
                        <TouchableOpacity className='absolute bg-white rounded-full p-2 right-0 bottom-15'>
                            <Image source={icons.edit} className='size-7' />
                        </TouchableOpacity>
                        
                        <Text className='text-2xl font-rubik-bold mt-4'>Moetaz</Text>
                        <Text className='text-lg font-rubik text-gray-400'>
                            AI Wizard
                        </Text>
                    </View> 
                </View>
                    
                <View className='flex-col justify-center items-center mt-10'>
                    <SettingsItem title='Mes réservations' icon={icons.calendar} />
                    <SettingsItem title='Mes paiements' icon={icons.calendar} />                    
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Profile;