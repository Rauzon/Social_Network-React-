const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";

let dialogIntialization = {
    dialogData : [{name: "Maxim", link: "/dialogs/1"},
        {name: "Artem", link: "/dialogs/2"},
        {name: "Antonio", link: "/dialogs/3"}],
    messagesData : [{message: "Hey, What's up?"},
        {message: "I don't want"},
        {message: "You knew about it"}
    ]
}

export let addMessage = (newMessage) => {
    return { type: ADD_NEW_MESSAGE, newMessage};
} ;


export const dialogDataReducer = (state = dialogIntialization,action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.message = {...state.messagesData.message}
            let textBody = action.newMessage;
            stateCopy.messagesData.push({message: textBody});
            textBody = "";
            return stateCopy
        }
        default:
            return state
    }
}
