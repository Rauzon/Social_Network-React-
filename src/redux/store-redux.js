import {combineReducers, createStore} from "redux";
import {profileDataReducer} from "./profileData-reducer";
import {dialogDataReducer} from "./dialogData-reducer";

let reducers = combineReducers({
    ProfileData: profileDataReducer,
    DialogData: dialogDataReducer
});

let store = createStore(reducers);

export default store;