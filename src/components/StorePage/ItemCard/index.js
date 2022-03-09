import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { useToast } from 'react-native-paper-toast';
import Styles from './indexStyle';
import { Color } from "../../../constant/Constant";
import { addToCartProduct, like, setProduct, unLike } from '../../../redux/action/index';

const ItemCard = (props) => {
    const toaster = useToast();

    const likeData = (id) => {
        likeUnlikeProduct(id);
        props.like(id);
    }
    const unLikeProduct = (id) => {
        likeUnlikeProduct(id);
        props.unLike(id);
    }
    const likeUnlikeProduct = (id) => {
        let tempProduct = props.fetchData.productData;

        tempProduct.map((obj) => {
            obj.productitems_info.map((obj) => {
                if (obj._id === id) {
                    obj.isLiked = !obj.isLiked
                }
            })
        })
        props.setProduct(tempProduct)
    }
    const addToCart = (id) => {
        toaster.show({ message: 'Item Added SuccessFully...' })
        props.addToCartProduct(id);
    }
    const CardBody = (data, id) => {
        return (
            <View key={id}>
                <TouchableOpacity style={Styles.container}>
                    <View style={Styles.cardView}>
                        <View style={Styles.likeView}>
                            {
                                data.isLiked == true ? (
                                    <TouchableOpacity onPress={() => unLikeProduct(data._id)}>
                                        <AntDesign style={Styles.likeIcon} name="heart" size={24} color="red" />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity onPress={() => likeData(data._id)}>
                                        <AntDesign style={Styles.likeIcon} name="hearto" size={24} color="black" />
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                        <View style={Styles.imageView}>
                            {
                                data.images.length > 0 ? (
                                    <Image source={{ uri: data.images[0] }} style={{ height: 100, width: 100 }} />
                                ) : (
                                    <Image source={require('../../../assets/Images/noImages.jpg')} style={{ height: 120, width: 120 }} />
                                )
                            }
                        </View>
                        <View style={Styles.descriptionView}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, width: '90%', paddingLeft: 5 }}>{data.name}</Text>
                        </View>
                        <View style={Styles.ratingView}>
                            <TouchableOpacity>
                                <AntDesign name="star" size={17} color={Color.orange} />
                            </TouchableOpacity>
                            <Text style={Styles.ratingText} >{data.rating}</Text>
                        </View>
                        <View style={Styles.descountView}>
                            <Text style={Styles.savedText} >${data.mrp}</Text>
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
                                <Text style={Styles.priceText} >${data.costPrice}</Text>
                                <TouchableOpacity onPress={() => addToCart(data._id)} style={Styles.addButton}>
                                    <AntDesign name="plus" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={props.Horizontal}
        >
            {
                props?.Data?.length > 0 && props?.Data?.map((data, id) => {
                    return (
                        CardBody(data, id)
                    )
                })
            }
        </ScrollView>
    )
}

const mapDispatchToProps = {
    addToCartProduct,
    like,
    setProduct,
    unLike
};

export default connect(({ fetchData }) => ({
    fetchData,
}), mapDispatchToProps)(ItemCard);
