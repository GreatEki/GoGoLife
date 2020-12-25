import { LOADING_POSTS, LOADING_FAIL, MunicipalityPosts, PostsDispatchTypes, GET_MUNICIPALITY_POSTS } from '../types/postTypes';

interface StateInterface {
    municipalityPosts: MunicipalityPosts[];
    loading: boolean;
    message: string;
}

const INITIAL_STATE: StateInterface = {
    municipalityPosts: [],
    loading: false,
    message: ''
};

const postReducer = (state: StateInterface = INITIAL_STATE, action: PostsDispatchTypes): StateInterface => {
    switch (action.type) {
        case LOADING_POSTS:
            return {
                ...state,
                loading: true
            };
        case LOADING_FAIL:
            return {
                ...state,
                loading: false,
                message: action.payload
            };
        case GET_MUNICIPALITY_POSTS:
            return {
                ...state,
                municipalityPosts: action.payload
            };
        default:
            return state;
    }
};

export default postReducer;
