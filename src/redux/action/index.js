import axios from 'axios';

import {
    DASHBOARD,
    SHOP_CART_CATEGORY_DATA,
    CATEGORYID,
    SHOPDATACATWISE,
    FOOTBALLCARD,
    CLOTHS,
    ONE_DAY_SALE,
    PRODUCT_LIST,
    BANNER_DATA,
    ADDRESS,
    PROFILE_FEATURES,
    BRAND_SHOP_DATA,
    STOREINFO,
    DELIVERYDATA,
    NOTIFICATION,
    STORE_PRODUCT_DATA,
    FILTER,
    PRODUCT_CATEGORY,
    BRAND_DATA,
    SHOP_CATEGORY_ID,
    SHOP_CART_CATEGORY_WIS_ID,
    CATEGORY_PRODUCT_DATA,
    ADD_TO_CART,
    GET_CART_DATA,
    REMOVE_FROM_CART,
    LIKE,
    UNLIKE,
    PRODUCT_LIST_HEADER,
    BRAND_ID,
    DELETE_FROM_CART
} from './types';

import { api } from '../../constant/api';
import shopData from '../../data/shopData';
import AllCategoryData from '../../data/allCategoryData';
import ProductData from '../../data/ProductData';
import ClothProductData from '../../data/clothProduct';
import OneDaySaleData from '../../data/oneDaySale';
import ProdectList from '../../data/product';
import BannerData from '../../data/StorePageData';
import Address from '../../data/address';
import ProfileFeatures from '../../data/ProfileFeatures';
import BrandShop from '../../data/brandShopData';
import MarketInfo from "../../data/shopinfo/marketInfo";
import deliveryData from "../../data/shopinfo/deliverydata";
import NotificationData from '../../data/shopinfo/NotificationData';

export const setDashboardData = () => {
    return (dispatch) => {
        dispatch({
            type: DASHBOARD,
            payload: shopData
        });
    }
}

export const setShopByCategoryData = (categoryId) => {
    return (dispatch) => {
        axios.get(`${api}/shop`, {
            params: {
                skip: 0,
                limit: 10,
                categoryId: categoryId,
            }
        }).then(res => {
            dispatch({
                type: SHOP_CART_CATEGORY_DATA,
                payload: res.data
            })
        }).catch(err => {
            console.log("err setShopByCategoryData :: ", err)
        })
    }
}

export const setCategoryId = (id, name) => {
    return (dispatch) => {
        dispatch({
            type: CATEGORYID,
            payload: {
                dispatch: dispatch,
                id: id,
                categoryName: name
            }
        })
    }
}

export const setBannerData = () => {
    return (dispatch) => {
        dispatch({
            type: BANNER_DATA,
            payload: BannerData
        })
    }
}

export const allShopDataCategoryWise = () => {
    return (dispatch) => {
        dispatch({
            type: SHOPDATACATWISE,
            payload: AllCategoryData
        });
    }
}

export const setFootball = () => {
    return (dispatch) => {
        dispatch({
            type: FOOTBALLCARD,
            payload: ProductData
        })
    }
}

export const setCloths = () => {
    return (dispatch) => {
        dispatch({
            type: CLOTHS,
            payload: ClothProductData
        })
    }
}

export const setOneDayData = () => {
    return (dispatch) => {
        dispatch({
            type: ONE_DAY_SALE,
            payload: OneDaySaleData
        })
    }
}

export const setProductList = () => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_LIST,
            payload: ProdectList
        })
    }
}
export const setAddress = () => {
    return (dispatch) => {
        dispatch({
            type: ADDRESS,
            payload: Address
        })
    }
}

export const setProfileFeatures = () => {
    return (dispatch) => {
        dispatch({
            type: PROFILE_FEATURES,
            payload: ProfileFeatures
        })
    }
}

export const setBrandShopData = () => {
    return (dispatch) => {
        dispatch({
            type: BRAND_SHOP_DATA,
            payload: BrandShop
        })
    }
}

export const setMarketInfo = () => {
    return (dispatch) => {
        dispatch({
            type: STOREINFO,
            payload: MarketInfo
        })
    }

}
export const setDeliveryData = () => {
    return (dispatch) => {
        dispatch({
            type: DELIVERYDATA,
            payload: deliveryData
        })
    }

}

export const setNotification = () => {
    return (dispatch) => {
        dispatch({
            type: NOTIFICATION,
            payload: NotificationData
        })
    }
}

export const updateNotification = (notificationData) => {
    return (dispatch) => {
        dispatch({
            type: NOTIFICATION,
            payload: notificationData
        })
    }
}

export const Products = (id, shortBy) => {
    return (dispatch) => {
        axios.get(`${api}/product-item/shop`, {
            params: {
                shopId: id,
                skip: 0,
                limit: 10,
                sortBy: shortBy,
                userId: '620f7692199444f7bc02a144',
            }
        }).then(res => {
            dispatch({
                type: STORE_PRODUCT_DATA,
                payload: res.data.data
            })
        }).catch(err => {
            console.log("err Products :: ", err)
        });
    }
}

export const setProduct = (productData) => {
    return (dispatch) => {
        dispatch({
            type: STORE_PRODUCT_DATA,
            payload: productData
        })
    }
}

export const ProductCategory = () => {
    return (dispatch) => {
        axios.get(`${api}/category`, {
            params: {
                skip: 0,
                limit: 10
            }
        }).then(res => {
            dispatch({
                type: PRODUCT_CATEGORY,
                payload: res.data
            })
        }).catch(err => {
            console.log("err ProductCategory :: ", err)
        });
    }
}

export const setBrandData = (shopId, catId) => {
    return (dispatch) => {
        axios.get(`${api}/brand/categoryshop`, {
            params: {
                shopId: shopId,
                categoryId: catId,
                skip: 0,
                limit: 10
            }
        }).then((res) => {
            dispatch({
                type: BRAND_DATA,
                payload: res.data
            })
        }).catch(err => {
            console.log("err setBrandData :: ", err)
        })
    }
}

export const categoryProduct = (shopId, categoryId, brandId) => {
    return (dispatch) => {
        axios.get(`${api}/product-item/categoryshop`, {
            params: {
                shopId: shopId,
                categoryId: categoryId,
                skip: 0,
                limit: 10,
                userId: '620f7692199444f7bc02a144',
                brands: brandId,
            }
        }).then((res) => {
            dispatch({
                type: CATEGORY_PRODUCT_DATA,
                payload: res.data
            })
        }).catch(err => {
            console.log("err categoryProduct :: ", err)
        })
    }
}

export const addToCartProduct = (pId) => {
    return (dispatch) => {
        axios.post(`${api}/cart`, {
            productItemId: pId,
            userId: '620f3fed199444f7bc02a143',
            add: true
        }).then((res) => {
            dispatch({
                type: ADD_TO_CART,
                payload: res.data
            })
        }).catch(err => {
            console.log("err addToCartProduct :: ", err)
        })
    }
}

export const removeCartProduct = (id) => {
    return (dispatch) => {
        axios.post(`${api}/cart`, {
            productItemId: id,
            userId: '620f3fed199444f7bc02a143',
            add: false
        }).then((res) => {
            dispatch({
                type: REMOVE_FROM_CART,
                payload: res.data
            })
        }).catch(err => {
            console.log("err removeCartProduct :: ", err)
        })
    }
}

export const getCartData = () => {
    return (dispatch) => {
        axios.get(`${api}/cart`, {
            params: {
                userId: '620f3fed199444f7bc02a143'
            }
        }).then((res) => {
            dispatch({
                type: GET_CART_DATA,
                payload: res.data
            })
        }).catch(err => {
            console.log("err getCartData :: ", err)
        })
    }
}
export const deleteCartData = (productItemId) => {
    return (dispatch) => {
        axios.put(`${api}/cart/remove`, {
            productItemId: productItemId,
            userId: "620f3fed199444f7bc02a143"
        }).then((res) => {
            dispatch({
                type: DELETE_FROM_CART,
                payload: productItemId
            })
        }).catch(err => {
            console.log("err deleteCartData :: ", err)
        })
    }
}

export const like = (pId) => {
    return (dispatch) => {
        axios.post(`${api}/wishlist`, {
            userId: '620f7692199444f7bc02a144',
            productItemId: pId,
        }).then((res) => {
            dispatch({
                type: LIKE,
                payload: res.data
            })
        }).catch(err => {
            console.log("err like :: ", err)
        })
    }
}

export const unLike = (pId) => {
    return (dispatch) => {
        axios.put(`${api}/wishlist/remove-item`, {
            userId: '620f7692199444f7bc02a144',
            productItemId: pId,
        }).then((res) => {
            dispatch({
                type: UNLIKE,
                payload: res.data
            })
        }).catch(err => {
            console.log("err unLike :: ", err)
        })
    }
}

export const setFilter = () => {
    return (dispatch) => {
        dispatch({
            type: FILTER,
            payload: false
        });
    }
}

export const productCategoryId = (id) => {
    return (dispatch) => {
        dispatch({
            type: SHOP_CATEGORY_ID,
            payload: id
        })
    }
}

export const shopCartCategoryWiseId = (id) => {
    return (dispatch) => {
        dispatch({
            type: SHOP_CART_CATEGORY_WIS_ID,
            payload: id
        })
    }
}

export const setProductTitle = (name) => {
    return (dispatch) => {
        dispatch({
            type: PRODUCT_LIST_HEADER,
            payload: name
        })
    }
}

export const setBrandShopId = (brandId) => {
    return (dispatch) => {
        dispatch({
            type: BRAND_ID,
            payload: brandId
        })
    }
}
