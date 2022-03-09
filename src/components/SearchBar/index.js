import React, { useState } from "react";
import { View, TouchableOpacity, Modal, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
// import { Octicons } from '@expo/vector-icons';
// import { Color } from "../../constant/Constant";
import Styles from './indexStyle';
import Filter from "../Filter/index";
import { connect } from "react-redux";

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const onChangeSearch = query => setSearchQuery(query);
    const openModal = () => {
        setModalVisible(!modalVisible)
    }
    return (
        <View style={Styles.searchContainer}>
            <View style={Styles.searchView}>
                <View style={Styles.outerSearchBox}>
                    <Searchbar
                        placeholder="Search Store"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={Styles.search}
                    />
                </View>
                {
                    !searchQuery && props.filter == true ? (
                        <TouchableOpacity style={Styles.iconView} onPress={openModal} >
                            {/* <Octicons style={Styles.icon} name="settings" color={Color.darkWiteColor}/> */}
                        </TouchableOpacity>
                    ) : null
                }
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <Filter openModal={openModal} />
            </Modal>
        </View>
    )
}
export default connect(({ fetchData }) => ({
    fetchData,
}), {})(SearchBar);
