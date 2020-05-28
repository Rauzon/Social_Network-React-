import {headerAPI} from "../DAL/HeaderAPI";

const SET_LOGIN_DATA = "SET_LOGIN_DATA";

let authIntialization = {
    userId: null,
    login: null,
    email: null,
    password: null,
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


 let setAuthData = (userId, email, login, isLogining) => {
    return { type: SET_LOGIN_DATA, data: {userId, email, login, isLogining} }
};


export const setAuthThunk = () => (dispatch) => {
        headerAPI.setAuth()
            .then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data; //destruction
                dispatch(setAuthData(id, email, login, true));
            }
        })
}

export const putLoginThunk = (email, password, checkbox) => (dispatch) => {
    debugger
    headerAPI.putLogin(email, password, checkbox)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setAuthThunk());
            }
        })
}

export const putLoginOutThunk = (email, password, checkbox) => (dispatch) => {
    debugger
    headerAPI.deleteLogin()
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setAuthData(null, null, null, false));
            }
        })
}