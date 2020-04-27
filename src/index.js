import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store-redux";
import {Provider} from "react-redux";

export let rerenderDom = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderDom();


//call function from state.js and give value rerenderDom to observer argument
store.subscribe(() => {
    rerenderDom();
});





