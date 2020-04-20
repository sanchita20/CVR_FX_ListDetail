import axios from 'axios';
import {
    URL,
    SUCCESS,
    LOADING,
    FAILURE,
    LOCAL_STORAGE_DATA
} from '../res/Constants';

export const loading = () => ({
    type: LOADING
});

export const onSuccess = (data) => ({
    type: SUCCESS,
    data: data
});

export const failed = (data) => ({
    type: FAILURE,
    data: data
});

export const fetchData = () => {
    return function (dispatch) {
        dispatch(loading())

        return axios.get(URL)
            .then(res => {
                const { success } = res.data;
                if (!!success) {
                    localStorage.setItem(LOCAL_STORAGE_DATA, JSON.stringify(success))
                    dispatch(onSuccess(success));
                } else dispatch(failed('error'));
            })
            .catch(err => {
                console.log(err);
            })
    }
}