const ADDPOST = "ADDPOST",
    CHANGETEXT = "CHANGETEXT";

let profileIntialization = {
    myPostData: [{
        content: "That cheese which we was eating in the chinese restaurant was very delicious"
    },
        {content: "I've got 40 cats.I love my pets. All of them are cool."}]
};

export const profileDataReducer = (state = profileIntialization,action) => {

    switch (action.type) {
        case ADDPOST:
            let newPost = {
                content : state.content
            }
            state.myPostData.push(newPost);
            return state
        case CHANGETEXT:
            state.content= action.updateValue;
            return state
        default:
            return state
    }
}

export let addPostActionCreater = () => {
    return { type: ADDPOST};
} ;

export let changeAreaActionCreater = (text) =>{
    return {type: CHANGETEXT, updateValue: text };
}
