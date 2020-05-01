const FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS";

let dialogIntialization = {
    users: []
}

export let followActionCreater = (userId) => {
    return { type: FOLLOW, userId }
} ;

export let unfollowActionCreater = (userId) =>{
    return {type: UNFOLLOW, userId}
}

export let setUsersActionCreator = (users) => {
    return {
        type: SET_USERS, users
    }
};

export const usersReducer = (state = dialogIntialization,action) => {
    switch (action.type) {
        case FOLLOW: {
            return  {
                ...state,
                users: state.users.map((u) => {
                        if (u.id === action.userId) {
                            return {...u, followed : true}
                        }
                        return u
                    }
                )
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }
        }
        case SET_USERS:{
            return {
                ...state, users: [...state.users, ...action.users]
                }
            }
        default:
            return state
    }
}
