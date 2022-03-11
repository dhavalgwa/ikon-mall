import React from "react";
import { View, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';

import Styles from './Styles';
import { Entypo } from '@expo/vector-icons'; 
const SearchBarMap = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={Styles.searchContainer}>
            <View style={Styles.searchView}>
                <View style={Styles.outerSearchBox}>
                    <Searchbar
                        placeholder="Search "
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={Styles.search}
                    />

                </View>
                {
                    !searchQuery ? (
                        <TouchableOpacity style={Styles.iconView}>
                        <Entypo name="cross" size={24} color="black" />
                        </TouchableOpacity>
                    ): null
                }
            </View>
        </View>
    )
}

export default SearchBarMap;