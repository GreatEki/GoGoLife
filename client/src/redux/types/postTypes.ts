export const LOADING_POSTS = 'LOADING_POTS';
export const LOADING_FAIL = 'LOADING_FAIL';
export const GET_MUNICIPALITY_POSTS = 'GET_MUNICIPALITY_POSTS';

export type LoadingPosts = {
    type: typeof LOADING_POSTS;
};

export type LoadingFail = {
    type: typeof LOADING_FAIL;
    payload: string;
};

export interface MunicipalityPosts {
    title: string;
    category: string;
    content: string;
}

export interface GetMunicipalityPosts {
    type: typeof GET_MUNICIPALITY_POSTS;
    payload: MunicipalityPosts[];
}

export type PostsDispatchTypes = GetMunicipalityPosts | LoadingPosts | LoadingFail;
