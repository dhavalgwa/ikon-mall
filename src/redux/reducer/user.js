import { any } from "react-native/Libraries/Text/TextNativeComponent";

const initialState = {
   // login: [],
   // productData: [],
    //bannerData: [],
   // modelFilter: false,
    // shopData: [],
    usersList: [],
    user: any,
    loading : false,
    errorMessage : null
    // productBrandData: [],
    // homeCategoryData: [],
    // catWisProductData: [],
    // shopCategoryId: [],
    // shopCartCatWise: [],
    // categoryProductData: [],
    // addToCartItem: [],
    // getCartData: [],
    // removeCartItem: [],
    // likeData: [],
    // unLikeData: [],
    // productTitle: [],
    // brandId: [],
    // shopCardList: [],
};

const initialData = (state = initialState, action) => {

    switch (action.type) {
        case "DASHBOARD": {
            return { ...state, Dashboard: action.payload }
        }
        // case "SHOPDATA": {
        //     return { ...state, shopData: action.payload }
        // }
        case "CATEGORYID": {
            return { ...state, Category: action.payload }
        }
        case "SHOPDATACATWISE": {
            return { ...state, AllShopCategory: action.payload }
        }
        case "FOOTBALLCARD": {
            return {
                ...state, FootballCardData: action.payload
            }
        }
        case "CLOTHS": {
            return {
                ...state, Cloths: action.payload
            }
        }
        case "ONE_DAY_SALE": {
            return {
                ...state, OneDatSaleData: action.payload
            }
        }
        case "PRODUCT_LIST": {
            return {
                ...state, productList: action.payload
            }
        }
        case "BANNER_DATA": {
            return {
                ...state, bannerData: action.payload
            }
        }
        case "ADDRESS": {
            return {
                ...state, Address: action.payload
            }
        }
        case "PROFILE_FEATURES": {
            return {
                ...state, ProfileFeatures: action.payload
            }
        }
        case "BRAND_SHOP_DATA": {
            return {
                ...state, BrandShopData: action.payload
            }
        }
        case "STOREINFO": {
            return { ...state, StoreInfoData: action.payload }
        }
        case "DELIVERYDATA": {
            return { ...state, DeliveryData: action.payload }
        }
        case "NOTIFICATION": {
            return { ...state, NotificationData: action.payload }
        }
        case "STORE_PRODUCT_DATA": {
            return { ...state, productData: action.payload }
        }
        case "FILTER": {
            return {
                ...state, modelFilter: !action.payload
            }
        }
        case "PRODUCT_CATEGORY": {
            return { ...state, homeCategoryData: action.payload }
        }
        case "BRAND_DATA": {
            return { ...state, productBrandData: action.payload }
        }
        case "SHOP_CATEGORY_ID": {
            return { ...state, shopCategoryId: action.payload }
        }
        case "SHOP_CART_CATEGORY_WIS_ID": {
            return { ...state, shopCartCatWise: action.payload }
        }
        case "CATEGORY_PRODUCT_DATA": {
            return { ...state, categoryProductData: action.payload }
        }
        case "ADD_TO_CART": {
            return { ...state, addToCartItem: action.payload }
        }
        case "GET_CART_DATA": {
            return { ...state, getCartData: action.payload }
        }
        case "REMOVE_FROM_CART": {
            return { ...state, removeCartItem: action.payload }
        }
        case "LIKE": {
            return {...state, likeData: action.payload}
        }
        case "UNLIKE": {
          return {...state, unLikeData: action.payload }
        }
        case "PRODUCT_LIST_HEADER": {
            return { ...state, productTitle: action.payload }
        }
        case "BRAND_ID": {
            return {...state, brandId: action.payload}
        }
        case "SHOP_CART_CATEGORY_DATA": {
            return {...state, shopCardList: action.payload}
        }
        case "DELETE_FROM_CART": {
            return {...state,  cartData : cartData.data.filter(el => el.productItemId !== action.payload) }
        }
        default:
            return state
    }
}

export default initialData;
