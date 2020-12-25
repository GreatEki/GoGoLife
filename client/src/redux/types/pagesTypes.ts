export const GET_ALL_PAGES = 'GET_ALL_PAGES';
export const PAGES_LOADING = 'PAGES_LOADING';
export const LOADING_FAIL = 'LOADING_FAIL';

export type PagesLoading = {
    type: typeof PAGES_LOADING;
};

export type LoadingFail = {
    type: typeof LOADING_FAIL;
    payload: string;
};

type Content = {
    type: string;
    title: string;
    properties: {
        categories: string[];
    };
};

export interface AllPages {
    title: string;
    icon: string;
    url: string;
    content: Content[];
}

export interface GetAllPages {
    type: typeof GET_ALL_PAGES;
    payload: AllPages[];
}

export type PagesDispatchTypes = GetAllPages | PagesLoading | LoadingFail;
