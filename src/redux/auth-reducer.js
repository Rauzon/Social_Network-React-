import {headerAPI} from "../DAL/HeaderAPI";

const SET_LOGIN_DATA = "SET_LOGIN_DATA";

let authIntialization = {
    userId: null,
    login: null,
    email: null,
    isLogining: false
}

export const authReducer = (state = authIntialization,action) => {
    switch (action.type) {
        case SET_LOGIN_DATA: {
            return  {
                ...state,
                    ...action.data,
                    isLogining: true
                        }
                    }
        default:
            return state
    }
}


export let setAuthData = (userId, email, login) => {
    return { type: SET_LOGIN_DATA, data: {userId, email, login} }
};


export const setAuthThunk = () => {

    return (dispatch) => {

        headerAPI.setAuth()
            .then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data; //destruction
                dispatch(setAuthData(id, email, login));
            }
        })

    }

}