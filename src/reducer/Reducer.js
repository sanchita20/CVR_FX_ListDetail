import {
    SUCCESS,
    LOADING,
    FAILURE
} from '../res/Constants';

const initiatState = {
    isLoading: true,
    data: [],
    error: false,
}

const reducerData = (state = initiatState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                isLoading: true,
                error: false
            }
        case SUCCESS:
            return {
                isLoading: false,
                data: action.data,
                error: false
            }
        case FAILURE:
            return {
                isLoading: false,
                error: false
            }
        default:
            return state
    }
}

export default reducerData;