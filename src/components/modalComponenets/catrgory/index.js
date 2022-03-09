import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { connect } from "react-redux";

import { Color } from "../../../constant/Constant";
import Styles from './indexStyle';

const Categorys = () => {
    const [data, setData] = useState(
        [
            {
                name: "Filter",
                logo: require("../../../assets/Images/filter.png"),
                image: 'https://media-exp1.licdn.com/dms/image/C560BAQHXJ3GqjqY2yg/company-logo_200_200/0/1625156541828?e=2159024400&v=beta&t=H1sPbklSygAAwqhC2OX05LXSSY9tUaOPRJu0DCTG-YA',
                description: 'Shop for best selection Shoes every day low mony big store'
            },
            {
                name: "Near you",
                image: 'https://media-exp1.licdn.com/dms/image/C560BAQHXJ3GqjqY2yg/company-logo_200_200/0/1625156541828?e=2159024400&v=beta&t=H1sPbklSygAAwqhC2OX05LXSSY9tUaOPRJu0DCTG-YA',
                description: 'Shop for best selection Shoes every day low mony big store'
            },
            {
                name: "Open now",
                image: 'https://media-exp1.licdn.com/dms/image/C560BAQHXJ3GqjqY2yg/company-logo_200_200/0/1625156541828?e=2159024400&v=beta&t=H1sPbklSygAAwqhC2OX05LXSSY9tUaOPRJu0DCTG-YA',
                description: 'Shop for best selection Shoes every day low mony big store'
            },
            {
                name: "24/7",
                image: 'https://media-exp1.licdn.com/dms/image/C560BAQHXJ3GqjqY2yg/company-logo_200_200/0/1625156541828?e=2159024400&v=beta&t=H1sPbklSygAAwqhC2OX05LXSSY9tUaOPRJu0DCTG-YA',
                description: 'Shop for best selection Shoes every day low mony big store'
            },
            // {
            //     name: "Electronic",
            //     image: 'https://media-exp1.licdn.com/dms/image/C560BAQHXJ3GqjqY2yg/company-logo_200_200/0/1625156541828?e=2159024400&v=beta&t=H1sPbklSygAAwqhC2OX05LXSSY9tUaOPRJu0DCTG-YA',
            //     description: 'Shop for best selection Shoes every day low mony big store'
            // },

        ]
    );

    const [toggle, setToggle] = useState(0);

    const categoryActiveColor = (id) => {
        setToggle(id)
    }
    return (
        <View style={Styles.categoryView}>
            <View style={Styles.viewOnMap}>
                {/* <Text style={Styles.categoriesText}>Categories</Text> */}
                <TouchableOpacity>
                    {/* <Text style={Styles.viewOnMapText} >View on map</Text> */}
                </TouchableOpacity>
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ paddingLeft: 9 }}
            >

                {
                    data.map((data, id) => (
                        <TouchableOpacity key={id} onPress={() => categoryActiveColor(id)} style={toggle !== id ? Styles.buttonName : Styles.buttonName1}>

                            <Text style={toggle !== id ? Styles.categoryText : Styles.categoryText1}>
                                <Image source={data.logo} />{data.name}</Text>

                        </TouchableOpacity>
                    ))
                }

            </ScrollView>
        </View>
    )
}


export default connect(({ fetchData }) => ({
    fetchData,
}), {})(Categorys);