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
                {message: "You knew about it"}]
        }
    },
    getState() {
      return this._state;
    },
    _rerenderDom()  {
        console.log("do something");
    },
    addPost() {
        let newPost = {
            content: this._state.ProfileData.myPostData.content
        };
        this._state.ProfileData.myPostData.push(newPost);
        this._state.ProfileData.myPostData.content = "";
        this._rerenderDom(this._state);
    },
    changeText(updateValue) {
        this._state.ProfileData.myPostData.content= updateValue;
        this._rerenderDom(this._state);
    },
    sibscribe(observer) {
        this._rerenderDom = observer;
    }

}


export default store;

