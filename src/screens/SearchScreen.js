import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = ({ navigation }) => {
    const[term, setSterm] = useState('');
    const[searchApi, results, errorMessage] = useResults();

    const filterResultByPrice = (price) => {
        // price === $ 
        return results.filter(result => {
            return result.price === price;
        });
    };
    

    return (
        <>
            <SearchBar term={term} 
                onTermChange={newTerm => setSterm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            ></SearchBar>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList 
                    results={filterResultByPrice('$')} 
                    title="Cost Effective" 
                />
                <ResultList 
                    results={filterResultByPrice('$$')} 
                    title="Bit Pricier"
                />
                <ResultList 
                    results={filterResultByPrice('$$$')} 
                    title="Big Spender"
                />
            </ScrollView>
        </>
    );
};

const style = StyleSheet.create({
    
});

export default SearchScreen;