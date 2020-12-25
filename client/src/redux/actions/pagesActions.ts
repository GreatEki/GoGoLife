import { Dispatch } from 'redux';
import { GET_ALL_PAGES, LOADING_FAIL, PagesDispatchTypes, PAGES_LOADING } from '../types/pagesTypes';
import axios from 'axios';
import { baseUrl } from '../BaseUrl';

export const getAllPages = () => async (dispatch: Dispatch<PagesDispatchTypes>) => {
    try {
        dispatch({
            type: PAGES_LOADING
        });
        const { data } = await axios.get(`${baseUrl}pages`);

        dispatch({
            type: GET_ALL_PAGES,
            payload: data.data
        });
    } catch (err) {
        dispatch({
            type: LOADING_FAIL,
            payload: err.response ? err.response.data.message : err.message
        });
    }
};
