import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/state";

export let rerenderDom = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store.getState()}
                     dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderDom(store.getState());


//call function from state.js and give value rerenderDom to observer argument
store.sibscribe(rerenderDom);





