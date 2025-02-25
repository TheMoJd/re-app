import icons from '@/constants/icons';
import images from '@/constants/images';
import React  from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface interfaceProps {
    onPress?: () => void;
}

export const FeaturedCard = ({onPress}: interfaceProps) => {
    return (
        <TouchableOpacity onPress={onPress} className='flex-col items-start w-60 h-80 relative'>
            <Image source={images.japan} className='size-full rounded-2xl' />
            <Image source={images.cardGradient} className='size-full rounded-2xl absolute bottom-0' />

            <View className='flex-row absolute top-5 right-5 bg-white/90 px-3 py-1.5 rounded-full'>
                <Image source={icons.star} className='size-3.5' />
                <Text className='text-xs font-rubik-bold text-primary ml-1'>4.4</Text>
            </View>

            <View className='flex-col items-start absolute bottom-5 inset-x-5'>
                <Text className="text-xl font-rubik-extrabold text-white"
                numberOfLines={1}>Appartement neuf</Text>
                <Text className="text-base font-rubik text-white" numberOfLines={1}>
                1 rue Victor Hugo, 29200</Text>
                <View className='flex-row items-center justify-between w-full'>
                    <Text className='text-base font-rubik-extrabold text-white'>$2000/mois</Text>
                    <Text className='text-base font-rubik text-white ml-1'></Text>
                    <Image source={icons.heart} className='size-5' />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export const Card = ({onPress}: interfaceProps) => {
    return (
        <TouchableOpacity onPress={onPress} className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg 
        shadow-black-100/70 relative">
            <View className='flex-row items-center absolute top-5 right-5 bg-white/90 px-3 py-1.5 rounded-full z-50'>
                <Image source={icons.star} className="size-2.5" />
                <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
                    4.4
                </Text>
            </View>

            <Image source={images.newYork} className="w-full h-40 rounded-lg" />
            <View className="flex-col mt-2">
                <Text className="text-base font-rubik-extrabold text-black-300" numberOfLines={1}>
                    Studio cozy
                </Text>
                <Text className="text-base font-rubik text-black-100" numberOfLines={1}>
                    1 rue Victor Hugo, 29200
                </Text>
                <View className="flex-row items-center justify-between w-full mt-2">
                    <Text className="text-base font-rubik-extrabold text-primary-300">$2000/mois</Text>
                    <Image source={icons.heart} className="w-5 h-5 mr-2" />
                </View>
            </View>
        </TouchableOpacity>
    );
};


