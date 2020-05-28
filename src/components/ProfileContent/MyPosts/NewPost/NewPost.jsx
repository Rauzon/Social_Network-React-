import React from "react";
import newPostStyle from "./NewPosts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLength30Creator, required} from "../../Utilits/Validators/validator";
import {ElementHOC} from "../../../ComponentForValidators/Textarea";

const maxLength30 = maxLength30Creator(30),
    Textarea = ElementHOC('textarea'); // call in Field component for transfer to component;

const FormNewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={newPostStyle.newPost_textarea}>
                <label>Content:</label>
                <Field name={'textAreaAddPost'} component={Textarea}  placeholder={'enter text...'}
                       validate={[required, maxLength30]} />
            </div>
            <div className={newPostStyle.newPost_button}>
                <button>Опубликовать</button>
            </div>
        </form>
    )
}

const ReduxFormNewPost = reduxForm({form: 'newPostForm'})(FormNewPost);

const NewPost = (props) => {
    //for form
    const onSubmit = (formData) => {
        props.addPost(formData.textAreaAddPost);
    }

    return (
        <div>
            <div className={newPostStyle.newPost}>
                new post
                <ReduxFormNewPost {...props} onSubmit={onSubmit} />
            </div>
        </div>
    );
}


export default NewPost;