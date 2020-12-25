import { Dispatch } from 'redux';
import axios from 'axios';
import { PostsDispatchTypes, LOADING_POSTS, GET_MUNICIPALITY_POSTS, LOADING_FAIL } from '../types/postTypes';
import { baseUrl } from '../BaseUrl';

export const getMunicipalityPosts = () => async (dispatch: Dispatch<PostsDispatchTypes>) => {
    try {
        dispatch({
            type: LOADING_POSTS
        });

        const { data } = await axios.get(`${baseUrl}posts/municipal`);

        dispatch({
            type: GET_MUNICIPALITY_POSTS,
            payload: data.data
        });
    } catch (err) {
        dispatch({
            type: LOADING_FAIL,
            payload: err.response ? err.response.data.message : err.message
        });
    }
};
