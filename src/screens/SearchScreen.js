import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const[term, setSterm] = useState('');

    return (
        <View>
            <SearchBar term={term} 
                onTermChange={newTerm => setSterm(newTerm)}
                onTermSubmit={() => console.log('Term was submitted')}
            ></SearchBar>
            <Text>{term}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    
});

export default SearchScreen;