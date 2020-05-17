import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileDataReducer} from "./profileData-reducer";
import {dialogDataReducer} from "./dialogData-reducer";
import {usersReducer} from "./user-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    ProfileData: profileDataReducer,
    DialogData: dialogDataReducer,
    UsersData: usersReducer,
    AuthData: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;