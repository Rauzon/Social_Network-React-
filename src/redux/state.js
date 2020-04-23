const ADDPOST = "ADDPOST",
      CHANGETEXT = "CHANGETEXT",
      ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE",
      UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";


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
    _addPost() {
        let newPost = {
            content : this._state.ProfileData.myPostData.content
        }
        this._state.ProfileData.myPostData.push(newPost);
        this._rerenderDom(this._state);
    },
    _changeText(updateValue) {
        this._state.ProfileData.myPostData.content= updateValue;
        this._rerenderDom(this._state);
    },
    _addNewMessage(){
        let textBody = this._state.DialogData.newMessage;
        this._state.DialogData.messagesData.push({message: textBody});
        textBody = "";
        this._rerenderDom(this._state);

    },
    _updateNewMessage(updateMessage){
        this._state.DialogData.newMessage = updateMessage;
        this._rerenderDom(this._state);
    },
    dispatch(action){
        if (action.type === "ADDPOST"){
            this._addPost();
        } else if (action.type === "CHANGETEXT"){
            this._changeText(action.updateValue);
        } else if(action.type === ADD_NEW_MESSAGE){
            this._addNewMessage();
        } else if(action.type === UPDATE_NEW_MESSAGE){
            this._updateNewMessage(action.updateMessage);
        }
    }
}

export let addPostActionCreater = () => {
    return { type: ADDPOST};
} ;

export let changeAreaActionCreater = (text) =>{
    return {type: CHANGETEXT, updateValue: text };
}

export let addMessageActionCreater = () => {
    return { type: ADD_NEW_MESSAGE};
} ;

export let updateMessageActionCreater = (message) =>{
    return {type: UPDATE_NEW_MESSAGE, updateMessage: message };
}


export default store;