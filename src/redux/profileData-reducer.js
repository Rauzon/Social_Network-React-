import {profileAPI} from "../DAL/ProfileAPI";

const ADDPOST = "ADDPOST",
    CHANGETEXT = "CHANGETEXT",
    SET_USER_PROFILE = "SET_USER_PROFILE",
    GET_STATUS = "GET_STATUS";

let profileIntialization = {
    myPostData: [{
        content: "That cheese which we was eating in the chinese restaurant was very delicious"
    },
        {content: "I've got 40 cats.I love my pets. All of them are cool."}],
    userProfile: null,
    status: ""
};

export const profileDataReducer = (state = profileIntialization,action) => {
    switch (action.type) {
        case ADDPOST: {
            let newPost = {
                content: state.content
            }
            let stateCopy = {...state};
            stateCopy.myPostData = [...state.myPostData]
            stateCopy.myPostData.push(newPost);
            return stateCopy
        }
        case CHANGETEXT:{
            let stateCopy = {...state};
            stateCopy.myPostData = [...state.myPostData];
            stateCopy.myPostData.content = {...state.myPostData.content};
            stateCopy.content= action.updateValue;
            return stateCopy
            }
        case SET_USER_PROFILE:{
            return {
                ...state,
                userProfile: action.userProfile
            }
        }
        case GET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state

    }
}

//ActionCreators

export let addPostActionCreater = () => {
    return { type: ADDPOST};
} ;

export let changeAreaActionCreater = (text) =>{
    return {type: CHANGETEXT, updateValue: text };
}
export let setUserProfile = (userProfile) =>{
    return {type: SET_USER_PROFILE, userProfile };
}
export let getStatus = (status) =>{
    return {type: GET_STATUS, status };
}

// thunks

export const setProfileThunk = (userId) => {
    return (dispatch) => {

        profileAPI.setUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }

}

export const getStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                if(response.status == 200){
                    dispatch(getStatus(response.data));
                }
            })
    }
}


export const updateStatusThunk = (status) => {
    return (dispatch) => {
        debugger
        profileAPI.updateStatus(status)
            .then(response => {
                debugger;
                if(response.status == 200){
                    dispatch(getStatus(status));
                }
            })
    }
}