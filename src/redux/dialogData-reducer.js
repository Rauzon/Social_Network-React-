

const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE",
    UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

let dialogIntialization = {
    dialogData : [{name: "Maxim", link: "/dialogs/1"},
        {name: "Artem", link: "/dialogs/2"},
        {name: "Antonio", link: "/dialogs/3"}],
    messagesData : [{message: "Hey, What's up?"},
        {message: "I don't want"},
        {message: "You knew about it"}
    ],
    newMessage: ""
}

export const dialogDataReducer = (state = dialogIntialization,action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let textBody = state.newMessage;
            state.messagesData.push({message: textBody});
            textBody = "";
            return state
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.updateMessage;
            return state
        default:
            return state
    }
}

export let addMessageActionCreater = () => {
    return { type: ADD_NEW_MESSAGE};
} ;

export let updateMessageActionCreater = (message) =>{
    return {type: UPDATE_NEW_MESSAGE, updateMessage: message };
}