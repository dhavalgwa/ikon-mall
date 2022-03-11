// import React, { useEffect } from "react";
// import { View, SafeAreaView, ScrollView } from 'react-native';
// import { connect } from 'react-redux';

// import SearchBar from '../../components/SearchBar/index';
// import Banner from '../../components/StorePage/Banner/index';
// import { setOneDayData, setBannerData, Products } from '../../redux/action/index';
// import ItemCard from '../../components/StorePage/ItemCard/index';
// import Styles from './indexStyle';

// const DealOfTheDay = (props) => {

//     useEffect(() => {
//         props.setOneDayData();
//         props.setBannerData();
//         props.Products();
//     }, [])
//     return (
//         <SafeAreaView>
//             <ScrollView
//                 showsHorizontalScrollIndicator={false}
//                 showsVerticalScrollIndicator={false}
//             >
//                 <View style={Styles.searchView}>
//                     <SearchBar />
//                 </View>
//                 <View style={Styles.bannerView}>
//                     <Banner data={props.oneDayBanner.fetchData.BannerData} />
//                 </View>
//                 <View style={Styles.bannerView}>
//                     <ItemCard navData={props} timeData={true} Data={props?.productData?.fetchData?.ProductData?.data} Horizontal={true} />
//                 </View>
//                 <View style={Styles.bannerView}>
//                     <ItemCard navData={props} timeData={false} Data={props?.productData?.fetchData?.ProductData?.data} Horizontal={true} />
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     )
// }

// const mapStateToProps = (state) => ({
//     oneDayData: state,
//     oneDayBanner: state,
//     productData: state
// });

// const mapDispatchToProps = () => {
//     return {
//         setOneDayData,
//         setBannerData,
//         Products
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(DealOfTheDay);