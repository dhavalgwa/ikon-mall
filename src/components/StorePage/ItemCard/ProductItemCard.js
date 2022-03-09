import React from "react";
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { useToast } from 'react-native-paper-toast';
import Styles from './ProductItemCard-css';

import { Color } from "../../../constant/Constant";
import {
    setLikeData,
    addToCartProduct,
    like,
    unLike
} from '../../../redux/action/index';

const ProductItemCard = (props) => {
    const toaster = useToast();

    const AddToCart = (id) => {
        toaster.show({ message: 'Item Added SuccessFully...' })
        props.addToCartProduct(id);
    }

    const likeData = (id) => {
        props.like(id);
    }

    const unLikeItem = (id) => {
        props.unLike(id)
    }

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={Styles.container} >
                <View style={Styles.cardView}>
                    <View style={Styles.likeView}>
                        {
                            props.Data.isLiked == true ? (
                                <TouchableOpacity onPress={() => unLikeItem(props.Data._id)}>
                                    <AntDesign style={Styles.likeIcon} name="heart" size={24} color="red" />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => likeData(props.Data._id)}>
                                    <AntDesign style={Styles.likeIcon} name="hearto" size={24} color="black" />
                                </TouchableOpacity>
                            )
                        }
                    </View>
                    <View style={Styles.imageView}>
                        {
                            props.Data.images.length > 0 ? (
                                <Image source={{ uri: props.Data.images[0] }} style={{ height: 100, width: 100 }} />
                            ) : (
                                <Image source={require('../../../assets/Images/noImages.jpg')} style={{ height: 120, width: 120 }} />
                            )
                        }
                    </View>
                    <View style={Styles.descriptionView}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, width: '90%', paddingLeft: 5 }}>{props.Data.name}</Text>
                    </View>
                    <View style={Styles.ratingView}>
                        <TouchableOpacity>
                            <AntDesign name="star" size={17} color={Color.orange} />
                        </TouchableOpacity>
                        <Text style={Styles.ratingText} >{props.Data.rating}</Text>
                    </View>
                    <View style={Styles.descountView}>
                        <Text style={Styles.savedText} >${props.Data.mrp}</Text>
                        <Text style={Styles.saleText} >Sale -10%</Text>
                    </View>
                </View>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#4E6CFF", "#7B9AFF"]}
                    style={{ height: 49 }}
                >
                    <View style={Styles.addItemContainer}>
                        <View style={Styles.addItemView}>
                            <Text style={Styles.priceText} >${props.Data.costPrice}</Text>
                            <TouchableOpacity onPress={() => AddToCart(props.Data._id)} style={Styles.addButton} >
                                <AntDesign name="plus" size={20} color="#4E6CFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

const mapDispatchToProps = {
    setLikeData,
    addToCartProduct,
    like,
    unLike
};

export default connect(({ fetchData }) => ({
    fetchData,
}), mapDispatchToProps)(ProductItemCard);
