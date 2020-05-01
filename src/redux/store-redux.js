import {combineReducers, createStore} from "redux";
import {profileDataReducer} from "./profileData-reducer";
import {dialogDataReducer} from "./dialogData-reducer";
import {usersReducer} from "./user-reducer";


let reducers = combineReducers({
    ProfileData: profileDataReducer,
    DialogData: dialogDataReducer,
    UsersData: usersReducer
});

let store = createStore(reducers);

export default store;