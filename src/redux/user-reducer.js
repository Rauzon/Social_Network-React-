import {usersAPI} from "../DAL/UsersAPI";

const FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
    DISABLE_BUTTON = "DISABLE_BUTTON",
    TOGGLE_LOADER = "TOGGLE_LOADER";

let dialogIntialization = {
    users: [],
    pageSize: 100,
    currentPage: 2,
    totalCount: 0,
    isChanging: false,
    isDisabledButton: false
}

const follow = (userId) => {
    return {type: FOLLOW, userId}
};

const unfollow = (userId) => {
    return {type: UNFOLLOW, userId}
}

const setUsers = (users) => {
    return {
        type: SET_USERS, users
    }
};
export let setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
};
export let setTotalUsersCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT, totalCount
    }
};
export let toggleLoader = (changeLoader) => {
    return {
        type: TOGGLE_LOADER, changeLoader
    }
};
export let disabledButton = (nonActiveBut) => {
    return {
        type: DISABLE_BUTTON, nonActiveBut
    }
};

export const usersReducer = (state = dialogIntialization, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
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
        case SET_USERS: {
            return {
                ...state, users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: [action.currentPage]
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state, totalCount: [action.totalCount]
            }
        }
        case TOGGLE_LOADER: {
            return {
                ...state, isChanging: action.changeLoader
            }
        }
        case DISABLE_BUTTON: {
            return {
                ...state, isDisabledButton: action.nonActiveBut
            }
        }
        default:
            return state
    }
}

// thunks for UsersContainer

export const getUsersThunk = (currentPage, pageSize) => { // in ComponentDidMount method

    return  (dispatch) => {
            dispatch(toggleLoader(true));
            usersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(toggleLoader(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
        }
}

export const getCurrentPagesThunk = (p, pageSize) => { // in onChangePage method

    return  (dispatch) => {
        dispatch(setCurrentPage(p));
        dispatch(toggleLoader(true));
        usersAPI.getUsers(p, pageSize).then(data => {
            dispatch(toggleLoader(false))
            dispatch(setUsers(data.items))
        })
    }
}

export const unfollowThunk = (userId) => { // in Users component

    return  (dispatch) => {
        dispatch(disabledButton(true));
        usersAPI.deleteFollow(userId)
            .then(response => {
                    dispatch(unfollow(userId));
            })
        dispatch(disabledButton(false));
        }
}

export const followThunk = (userId) => { // in Users component
    return  (dispatch) => {
        dispatch(disabledButton(true));
        usersAPI.deleteFollow(userId)
            .then(response => {
                    dispatch(follow(userId));
            })
        dispatch(disabledButton(false));
    }
}