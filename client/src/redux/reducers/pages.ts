import { AllPages, GET_ALL_PAGES, PagesDispatchTypes, PAGES_LOADING, LOADING_FAIL } from '../types/pagesTypes';

interface StateInterface {
    allPages?: AllPages[];
    loading: boolean;
    message: string;
}

const INITIAL_STATE: StateInterface = {
    allPages: [],
    loading: false,
    message: ''
};

const pagesReducer = (state: StateInterface = INITIAL_STATE, action: PagesDispatchTypes): StateInterface => {
    switch (action.type) {
        case GET_ALL_PAGES:
            return {
                ...state,
                allPages: action.payload
            };

        case PAGES_LOADING:
            return {
                ...state,
                loading: true
            };

        case LOADING_FAIL:
            return {
                loading: false,
                message: action.payload
            };

        default:
            return state;
    }
};

export default pagesReducer;
