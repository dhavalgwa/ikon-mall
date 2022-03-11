import axios from "axios";
import { api } from '../../constant/api';
import { ACTION_TYPES } from '../reducer/shop';
import { REQUEST, SUCCESS, FAILURE } from '../reducer/actionType'

import { SHOPDATA } from './types';

export const setShopData = () => {

    return (dispatch) => {
        dispatch({
            type: ACTION_TYPES.GET_SHOPS_LIST_REQUEST,
            payload: null
        })
        axios.get(`${api}/shop`, {
            params: {
                skip: 0,
                limit: 10
            }
        }).then(res => {
            dispatch({
                type: ACTION_TYPES.GET_SHOPS_LIST_SUCCESS,
                payload: res.data.data
            })
        }).catch(err => {
            dispatch({
                type: ACTION_TYPES.GET_SHOPS_LIST_ERROR,
                payload: err
            })
        })
    }
}