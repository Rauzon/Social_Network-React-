import {dialogDataReducer} from "./dialogData-reducer"
import {profileDataReducer} from "./profileData-reducer"



let store = {
    _state : {
        ProfileData : {
            myPostData : [{
                content: "That cheese which we was eating in the chinese restaurant was very delicious"
            },
                {content: "I've got 40 cats.I love my pets. All of them are cool."}],
        },
        DialogData : {
            dialogData : [{name: "Maxim", link: "/dialogs/1"},
                {name: "Artem", link: "/dialogs/2"},
                {name: "Antonio", link: "/dialogs/3"}],
            messagesData : [{message: "Hey, What's up?"},
                {message: "I don't want"},
                {message: "You knew about it"}
                ],
            newMessage: ""
        }
    },
    getState() {
      return this._state;
    },
    _rerenderDom()  {
        console.log("do something");
    },
    sibscribe(observer) {
        this._rerenderDom = observer;
    },
    dispatch(action){
        this._state.ProfileData.myPostData = profileDataReducer(this._state.ProfileData.myPostData,action);
        this._state.DialogData = dialogDataReducer(this._state.DialogData,action);
        this._rerenderDom(this._state);
    }
}

export default store;