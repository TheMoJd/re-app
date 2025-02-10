import icons from '@/constants/icons';
import { router, useLocalSearchParams, usePathname } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
    const path = usePathname();
    const params = useLocalSearchParams<{ query?: string }>();
    const [search, setSearch] = useState(params.query);
    const debounceSearch = useDebouncedCallback((query: string) => router.setParams({ query }), 500);


    const handleSearch = (query: string) => {
        setSearch(query);
        debounceSearch(query);
    }

    return (
        <View className='flex-row items-center justify-between w-full px-4 rounded-lg bg-accent border border-primary-100 py-2 mt-5'>
            <View className='flex-1 flex-row items-center justify-start z-50'>
                <Image source={icons.search} className='size-5 ml-1' />
                <TextInput
                    value={search}
                    onChangeText={handleSearch}
                    placeholder='Search'
                    placeholderTextColor='gray'
                    className='text-lg font-rubik-medium w-full flex-1 ml-2 mb-3'
                /> 
            </View>    
            <TouchableOpacity onPress={() => handleSearch('')}>
                <Image source={icons.filter} className='size-5 mr-2' />
            </TouchableOpacity>
        </View>
    );
};

export default Search;

